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
        // Nível 1
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

        // Nível 2
        for ($i = 0; $i < 70; $i++) {
            $firstvalue = mt_rand(31, 61);
            $lastvalue = mt_rand(31, 61);

            DB::table('math_problems')->insert([
                'problem' => "{$firstvalue} + {$lastvalue}",
                'result' => $firstvalue + $lastvalue,
                'stage' => 2,
                'mathoperation_id' => 1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }

        // Nível 3
        for ($i = 0; $i < 70; $i++) {
            $firstvalue = mt_rand(62, 92);
            $lastvalue = mt_rand(62, 92);

            DB::table('math_problems')->insert([
                'problem' => "{$firstvalue} + {$lastvalue}",
                'result' => $firstvalue + $lastvalue,
                'stage' => 3,
                'mathoperation_id' => 1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }


        //Subtração
        // Nível 1
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

        // Nível 2
        for ($j = 0; $j < 70; $j++) {
            $firstvalue = mt_rand(31, 61);
            $lastvalue = mt_rand(31, 61);

            if ($firstvalue > $lastvalue) {

                DB::table('math_problems')->insert([
                    'problem' => "{$firstvalue} - {$lastvalue}",
                    'result' => $firstvalue - $lastvalue,
                    'stage' => 2,
                    'mathoperation_id' => 2,
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ]);
            } else {

                DB::table('math_problems')->insert([
                    'problem' => "{$lastvalue} - {$firstvalue}",
                    'result' => $lastvalue - $firstvalue,
                    'stage' => 2,
                    'mathoperation_id' => 2,
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ]);
            }
        }

        // Nível 3
        for ($j = 0; $j < 70; $j++) {
            $firstvalue = mt_rand(62, 92);
            $lastvalue = mt_rand(62, 92);

            if ($firstvalue > $lastvalue) {

                DB::table('math_problems')->insert([
                    'problem' => "{$firstvalue} - {$lastvalue}",
                    'result' => $firstvalue - $lastvalue,
                    'stage' => 3,
                    'mathoperation_id' => 2,
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ]);
            } else {

                DB::table('math_problems')->insert([
                    'problem' => "{$lastvalue} - {$firstvalue}",
                    'result' => $lastvalue - $firstvalue,
                    'stage' => 3,
                    'mathoperation_id' => 2,
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ]);
            }
        }
        //Multiplicação
        // Nível 1
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

        // Nível 2
        for ($k = 0; $k < 70; $k++) {
            $firstvalue = mt_rand(11, 21);
            $lastvalue = mt_rand(11, 21);

            DB::table('math_problems')->insert([
                'problem' => "{$firstvalue} x {$lastvalue}",
                'result' => $firstvalue * $lastvalue,
                'stage' => 2,
                'mathoperation_id' => 3,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }

        // Nível 3
        for ($k = 0; $k < 70; $k++) {
            $firstvalue = mt_rand(22, 32);
            $lastvalue = mt_rand(22, 32);

            DB::table('math_problems')->insert([
                'problem' => "{$firstvalue} x {$lastvalue}",
                'result' => $firstvalue * $lastvalue,
                'stage' => 3,
                'mathoperation_id' => 3,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }

        //Divisão
        // Nível 1
        for ($l = 0; $l < 70; $l++) {
            $firstvalue = mt_rand(1, 30);
            $lastvalue = mt_rand(1, 30);

            while (($firstvalue % $lastvalue) != 0) {
                $firstvalue = mt_rand(1, 60);
                $lastvalue = mt_rand(1, 60);
                while (($firstvalue / $lastvalue) == 1) {
                    $firstvalue = mt_rand(1, 60);
                    $lastvalue = mt_rand(3, 60);
                }
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

        // Nível 2
        for ($l = 0; $l < 70; $l++) {
            $firstvalue = mt_rand(1, 260);
            $lastvalue = mt_rand(1, 260);

            while (($firstvalue % $lastvalue) != 0) {

                $firstvalue = mt_rand(1, 400);
                $lastvalue = mt_rand(1, 400);
                while (($firstvalue / $lastvalue) == 1) {
                    $firstvalue = mt_rand(1, 400);
                    $lastvalue = mt_rand(1, 400);

                    // print_r($firstvalue);
                    // print_r("\n");
                    // print_r($lastvalue);
                    // print_r("\n");
                }
            }

            if (($firstvalue % $lastvalue) == 0) {
                if ($firstvalue > $lastvalue) {

                    DB::table('math_problems')->insert([
                        'problem' => "{$firstvalue} ÷ {$lastvalue}",
                        'result' => $firstvalue / $lastvalue,
                        'stage' => 2,
                        'mathoperation_id' => 4,
                        'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                        'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    ]);
                } else {

                    DB::table('math_problems')->insert([
                        'problem' => "{$lastvalue} ÷ {$firstvalue}",
                        'result' => $lastvalue / $firstvalue,
                        'stage' => 2,
                        'mathoperation_id' => 4,
                        'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                        'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    ]);
                }
            }
        }

        // Nível 3
        for ($l = 0; $l < 70; $l++) {
            $firstvalue = mt_rand(1, 500);
            $lastvalue = mt_rand(1, 500);

            while (($firstvalue % $lastvalue) != 0) {
                $firstvalue = mt_rand(1, 1000);
                $lastvalue = mt_rand(1, 1000);
                while (($firstvalue / $lastvalue) == 1) {
                    $firstvalue = mt_rand(1, 1000);
                    $lastvalue = mt_rand(1, 1000);
                }
            }

            if (($firstvalue % $lastvalue) == 0) {
                if ($firstvalue > $lastvalue) {

                    DB::table('math_problems')->insert([
                        'problem' => "{$firstvalue} ÷ {$lastvalue}",
                        'result' => $firstvalue / $lastvalue,
                        'stage' => 3,
                        'mathoperation_id' => 4,
                        'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                        'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    ]);
                } else {

                    DB::table('math_problems')->insert([
                        'problem' => "{$lastvalue} ÷ {$firstvalue}",
                        'result' => $lastvalue / $firstvalue,
                        'stage' => 3,
                        'mathoperation_id' => 4,
                        'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                        'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    ]);
                }
            }
        }


        //Exponenciação
        // Nível 1
        for ($k = 0; $k < 70; $k++) {
            $value = mt_rand(1, 20);
            $power = 2;

            DB::table('math_problems')->insert([
                'problem' => "{$value} ^ {$power}",
                'result' => $value ** $power,
                'stage' => 1,
                'mathoperation_id' => 5,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }

        // Nível 2
        for ($k = 0; $k < 70; $k++) {
            $value = mt_rand(20, 40);
            $power = 3;

            DB::table('math_problems')->insert([
                'problem' => "{$value} ^ {$power}",
                'result' => $value ** $power,
                'stage' => 2,
                'mathoperation_id' => 5,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }

        // Nível 3
        for ($k = 0; $k < 70; $k++) {
            $value = mt_rand(20, 40);
            $power = 4;

            DB::table('math_problems')->insert([
                'problem' => "{$value} ^ {$power}",
                'result' => $value ** $power,
                'stage' => 3,
                'mathoperation_id' => 5,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
    }
}
