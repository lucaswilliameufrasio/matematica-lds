<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\User;
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
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $usuario = User::create([
            'name' => $request->nome,
            'email' => $request->email,
            'password' => bcrypt($request->senha),
        ]);
        return response()->json(
            [
                'data' => $usuario,
            ],
            200,
            ['Content-type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE
        );
    }

    /**
     * Retorna o Usuário autenticado.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(
            auth()->user(),
            200,
            ['Content-type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE
        );
    }

    public function updateUser(Request $request)
    {
        // dd(auth()->user()->id);
        User::where('id', auth()->user()->id)
            ->update([
                'name' => $request->name,
            ]);

        $user = collect(User::find(auth()->user()->id))
            ->except([
                'email_verified_at',
                'remember_token',
                'created_at',
            ]);

        return response()->json(
            [
                'data' => $user,
            ],
            200,
            ['Content-type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE
        );
    }
}
