<?php

namespace App\Http\Controllers\Ranking;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RankingController extends Controller
{
    //Função para me lembrar como funciona Many-to-Many
    public function teste()
    {
        //Primeiro busco um usuário
        $user = User::find(1);

        //Crio um registro de ranking no banco de dados
        $ranking = Ranking::create([
            'score' => 1000,
            'time' => 20,
            'operation_type' => 1,
        ]);

        //E anexo os dois na tabela users_rankings
        $user->rankings()->attach(1);

        //Para desanexar um ranking de um usuário ($user) rode o seguinte
        // $user->rankings()->detach(1);

    }
}
