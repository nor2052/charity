<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash; // For password hashing

class RegistrationController extends Controller
{
    public function register(Request $request)
{
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'identifier' => 'required|string|max:255|unique:users',
        'password' => 'required|string|min:8|confirmed',
    ]);

    try {
        // User creation logic (as before)...

        // Authentication (e.g., using Laravel Sanctum)
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Registration successful!',
            'token' => $token,
            'user' => $user, // Optional
        ]);
    } catch (\Illuminate\Validation\ValidationException $th) {
        $errorMessage = 'There were validation errors with your registration:';
        $errors = [];

        foreach ($th->errors() as $key => $message) {
            $errors[$key] = $message[0]; // Access the first error message for each field
        }

        return response()->json([
            'message' => $errorMessage,
            'errors' => $errors,
        ], 422);
    }
}

}    