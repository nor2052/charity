<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
<body>
    <h1>Register</h1>
    <form action="{{ route('api.register') }}" method="post">
        @csrf

        <label for="username">Username:</label>
        <input type="text" name="username" id="username" required>
        <br>

        <label for="login_method">Login Method:</label>
        <select name="login_method" id="login_method" required>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
        </select>
        <br>

        <div id="email_field">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" required>
        </div>

        <div id="phone_field" style="display: none;">
            <label for="phone">Phone:</label>
            <input type="tel" name="phone" id="phone" required>
        </div>

        <br>

        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required>
        <br>

        <button type="submit">Register</button>
    </form>

    <script>
        const loginMethodSelect = document.getElementById('login_method');
        const emailField = document.getElementById('email_field');
        const phoneField = document.getElementById('phone_field');

        loginMethodSelect.addEventListener('change', (event
