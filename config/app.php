<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Encryption Key
    |--------------------------------------------------------------------------
    |
    | This key is used by the Illuminate encrypter service and should be set
    | to a random, 32 character string, otherwise these encrypted strings
    | will not be safe. Please do this before deploying an application!
    |
    */
    'timezone' => 'UTC',

    'key' => env('APP_KEY'),

    'cipher' => 'AES-256-CBC',

    'log' => 'daily',

    'log_max_files' => 30,

	'license_key' => '76213-11576-167-1480412041-28f0b864',

    'debug' => env('APP_DEBUG', false),

    'basepath' => 'http://localhost:8080'
];
