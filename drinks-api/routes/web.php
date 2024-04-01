<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


//matches localhost:8888/lumen/public/
$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/drinks', 'DrinkController@getAll');
$router->get('/drinks/{id}', 'DrinkController@getOne');
$router->post('/drinks/add', 'DrinkController@save');
$router->post('/drinks/edit/{id}', 'DrinkController@update');
$router->delete('/drinks/delete/{id}', 'DrinkController@delete');













