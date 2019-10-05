<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function registerUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required|string',
            'email' => 'required|string|email|max:255|unique:users',
            'senha' => 'required|string',
            'telefone' => 'required|min:14|regex:/^\(\d{2}\)\s\d{4}-\d{4}$/',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        
        $usuario = User::create([
            'name' => $request->nome,
            'email' => $request->email,
            'password' => bcrypt($request->senha),
            'cellphone' => $request->telefone,
        ]);
        return response()->json([
            'data' => $usuario,
        ], 200,
            ['Content-type' => 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
    
    /**
     * Retorna o Usuário autenticado.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }
}
