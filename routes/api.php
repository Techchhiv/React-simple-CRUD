<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/createUser', function(Request $request){
    $validate = Validator::make($request->all(),[
        'email' => 'required',
        'password' => 'required',
        'name' => 'required'
    ]);

    if($validate->failed()){
        return response()->json([
            'status' => 0,
            'message' => "validation error!",
            'error' => $validate->errors(),
        ]);
    }

    $user = User::where('email',$request->get('email'))->where('name','=',$request->get('name'))->first();

    if($user){
        return response()->json([
            'status' => 0,
            'message' => "User already exist!",
        ]);
    }

    $user = User::insert([
        'email' => $request->get('email'),
        'name' => $request->get('name'),
        'password' => bcrypt($request->get('password')),
    ]);

    if($user){
        return response()->json([
            'status' => 1,
            'message' => "User Created Successfully!",
        ]);
    }

    return response()->json([
        'status' => 0,
        'message' => "User cannot be inserted!",
    ]);
});

Route::post('/loginUser', function (Request $request) {
    $validate = Validator::make($request->all(),[
        'email' => 'required',
        'password' => 'required',
    ]);

    if($validate->failed()){
        return response()->json([
            'status' => 0,
            'message' => "validation error!",
            'error' => $validate->errors(),
        ]);
    }

    $user = User::where('email', $request->get('email'))->first();

    if($user){
        if(Hash::check($request->get('password'),$user->password)){
            return response()->json([
                'status' => 1,
                'message' => "User logged in successfully!",
            ]);
        }

        return response()->json([
            'status' => 0,
            'message' => "User password is incorrect!",
        ]);
    }

    return response()->json([
        'status' => 0,
        'message' => "User not found within our system!",
    ]);

});

Route::get('/getUser',function(){
    $users = User::all();

    return response()->json([
        'users'=> $users
    ]);
});

Route::get('/user/{id}', function($id){
    $user = User::find($id);

    if($user){
        return response()->json([
            'status' => 1,
            'message' => "User retrieve successfully!",
            'user' => $user
        ]);
    }

    return response()->json([
        'status' => 0,
        'message' => "User not found!"
    ]);
});

Route::delete('/user/{id}',function($id){
    $user = User::find($id);
    
    if($user){
        $user->delete();
        return response()->json([
            'status' => 1,
            'message' => "User deleted successfully!"
        ]);
    }

    return response()->json([
        'status' => 0,
        'message' => "User not found!"
    ]);
});

Route::post('/user/update/{id}', function(Request $request, $id){
    $user = User::find($id);

    if($user){
        $user->update([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => bcrypt($request->get('password')),
        ]);

        return response()->json([
            'status' => 1,
            'message' => "User update succesfully!"
        ]);
    }
    return response()->json([
        'status' => 0,
        'message' => "User not found!"
    ]);
});