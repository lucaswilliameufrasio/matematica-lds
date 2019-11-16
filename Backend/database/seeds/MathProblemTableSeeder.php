<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class MathProblemTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Adição
        for ($i = 0; $i < 70; $i++) {
            $firstvalue = mt_rand(1, 30);
            $lastvalue = mt_rand(1, 30);

            DB::table('math_problems')->insert([
                'problem' => "{$firstvalue} + {$lastvalue}",
                'result' => $firstvalue + $lastvalue,
                'stage' => 1,
                'mathoperation_id' => 1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }

        //Subtração
        for ($j = 0; $j < 70; $j++) {
            $firstvalue = mt_rand(1, 30);
            $lastvalue = mt_rand(1, 30);

            if ($firstvalue > $lastvalue) {

                DB::table('math_problems')->insert([
                    'problem' => "{$firstvalue} - {$lastvalue}",
                    'result' => $firstvalue - $lastvalue,
                    'stage' => 1,
                    'mathoperation_id' => 2,
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ]);
            } else {

                DB::table('math_problems')->insert([
                    'problem' => "{$lastvalue} - {$firstvalue}",
                    'result' => $lastvalue - $firstvalue,
                    'stage' => 1,
                    'mathoperation_id' => 2,
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ]);
            }
        }

        //Multiplicação
        for ($k = 0; $k < 70; $k++) {
            $firstvalue = mt_rand(1, 10);
            $lastvalue = mt_rand(1, 10);

            DB::table('math_problems')->insert([
                'problem' => "{$firstvalue} x {$lastvalue}",
                'result' => $firstvalue * $lastvalue,
                'stage' => 1,
                'mathoperation_id' => 3,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }

        //Divisão
        for ($l = 0; $l < 70; $l++) {
            $firstvalue = mt_rand(1, 30);
            $lastvalue = mt_rand(1, 30);
            while (($firstvalue % $lastvalue) != 0) {
                $firstvalue = mt_rand(1, 60);
                $lastvalue = mt_rand(1, 60);
            }
            if (($firstvalue % $lastvalue) == 0) {
                if ($firstvalue > $lastvalue) {

                    DB::table('math_problems')->insert([
                        'problem' => "{$firstvalue} ÷ {$lastvalue}",
                        'result' => $firstvalue / $lastvalue,
                        'stage' => 1,
                        'mathoperation_id' => 4,
                        'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                        'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    ]);
                } else {

                    DB::table('math_problems')->insert([
                        'problem' => "{$lastvalue} ÷ {$firstvalue}",
                        'result' => $lastvalue / $firstvalue,
                        'stage' => 1,
                        'mathoperation_id' => 4,
                        'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                        'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    ]);
                }
            }
        }

        //Exponenciação
        for ($k = 0; $k < 70; $k++) {
            $value = mt_rand(1, 20);
            $power = 2;

            DB::table('math_problems')->insert([
                'problem' => "{$value} ^ {$power}",
                'result' => $value * $power,
                'stage' => 1,
                'mathoperation_id' => 3,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
    }
}
