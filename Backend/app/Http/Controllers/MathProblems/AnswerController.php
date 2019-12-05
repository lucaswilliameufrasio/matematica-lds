<?php

namespace App\Http\Controllers\MathProblems;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Math_problem;
use Validator;

class AnswerController extends Controller
{
    public function retStage($hits)
    {
        if ($hits <= 9) {
            return 1;
        } else if ($hits <= 15) {
            return 2;
        } else if ($hits <= 20) {
            return 3;
        }
    }

    public function genMathProblem(Request $request)
    {
        $stage = $this->retStage($request->hits);

        $problem = Math_problem::where('mathoperation_id', $request->operation)->where('stage', $stage)->get()->random(1);

        return $problem;
    }

    public function verifyAnswer(Request $request)
    {
        $problem = Math_problem::find($request->mathproblem_id);

        $validator = Validator::make(
            $request->all(),
            [
                'answer' => 'required|integer',
                'mathproblem_id' => 'required|integer',
                'operation' => 'required|integer',
            ],
            [
                'answer.required' => 'A resposta é necessária para verificação.',
                'mathproblem_id.required' => 'O id do problema deve ser fornecido.',
                'operation.required' => 'O id da operação deve ser fornecido.'
            ]
        );

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

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
}
