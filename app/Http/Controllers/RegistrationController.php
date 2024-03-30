<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash; // For password hashing

class RegistrationController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:users',
            'login_method' => 'required|in:email,phone',
            'email' => 'required_if:login_method,email|email|unique:users',
            'phone' => 'required_if:login_method,phone|unique:users',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Registration failed: ' . $validator->errors()->first(),
            ], 422);
        }

        $users = new User;
        $users->username = $request->username;

        if ($request->login_method === 'email') {
            $users->email = $request->email;
        } else {
            $users->phone = $request->phone;
        }

        $users->password = Hash::make($request->password);
        $users->save();

        return response()->json([
            'message' => 'Registration successful!',
        ]);
    }
}

