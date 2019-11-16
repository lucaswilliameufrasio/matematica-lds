<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Math_operation extends Model
{
    protected $fillable = [
        'name', 'email', 'password', 'cellphone',
    ];

    public function mathproblems()
    {
        return $this->hasMany('App\Models\Math_problem', 'mathoperation_id');
    }
}
