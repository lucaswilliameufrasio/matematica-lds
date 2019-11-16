<?php

namespace App\Http\Controllers\Ranking;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Match;
use App\Models\Math_problem;
use App\Models\User;

class ScoreController extends Controller
{
    public function genMathProblem(Request $request)
    {
        $problem = Math_problem::where('mathoperation_id', $request->operation)->get()->random(1);

        return $problem;
    }

    public function getOneMathProblem(Request $request)
    {
        return response()->json(
            [
                'data' => $this->genMathProblem($request),
            ],
            200,
            ['Content-type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE
        );
    }

    public function verifyAnswer(Request $request)
    {
        $problem = Math_problem::find($request->mathproblem_id);


        if (!isset($request->answer)) { }

        if ($problem->result == $request->answer) {

            return response()->json(
                [
                    'correctanswer' => true,
                    'message' => 'correct_answer',
                    'data' => $this->genMathProblem($request),
                ],
                200,
                ['Content-type' => 'application/json; charset=utf-8'],
                JSON_UNESCAPED_UNICODE
            );
        } else {

            return response()->json(
                [
                    'correctanswer' => false,
                    'message' => 'incorrect_answer',
                ],
                200,
                ['Content-type' => 'application/json; charset=utf-8'],
                JSON_UNESCAPED_UNICODE
            );
        }
    }

    public function registerMatch(Request $request){
        $match = Match::create([
            'score' => $request->score,
            'time'  => $request->time,
            'mathoperation_id' => $request->operation,
            'users_id' => auth()->id(),
        ]);


        return response()->json(
            [
                'message' => 'congratulations',
                'data' => $match,
            ],
            200,
            ['Content-type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE
        );
    }
}
