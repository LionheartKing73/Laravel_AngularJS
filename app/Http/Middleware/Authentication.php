<?php
/**
 * Created by PhpStorm.
 * User: ni5
 * Date: 24/1/17
 * Time: 2:56 PM
 */

namespace App\Http\Middleware;

use \Firebase\JWT\JWT;
use Closure;

class Authentication
{

    /**
     * @param         $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try{
            $jwt = $request->jwt;
            $token = $request->token;
            $jwtSecret = env("JWT_SECRET");
            $jwt = JWT::decode($token, $jwtSecret, array('HS256'));

            //Check token expiry
            if($jwt->exp < time()){
                throw new Exception("Token expired");
            }
        }
        catch(Exception $e){
            return $this->response->json(['error' => "Authentication failed"], 401);
        }
        return $next($request);
    }

}