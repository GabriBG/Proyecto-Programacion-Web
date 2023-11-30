<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;



class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    protected function create (array $data)
    {
     $user = User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => bcrypt($data['password']),
     ]);    $user->roles()->attach(Role::where('name', 'user')->first());
     return $user;
    }
}
