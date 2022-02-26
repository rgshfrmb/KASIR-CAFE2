<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
    //
    public function index()
    {
        $menus = Menu::latest()->paginate(5);
    
        return view('menus.index',compact('menus'))
            ->with('i', (request()->input('page', 1) - 1) * 5);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $Menu = Menu::all(); 
        return view('menus.create', compact('Menu'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response 
     */
    public function store(Request $request) 
    {
        $request->validate([
            'nama_menu'=>'required',
            'harga'=>'required',
            'deskripsi'=>'required',
            'ketersediaan'=>'required'
        ]);

        Menu::create($request->all());
        return redirect()->route('menus.index')
                        ->with('success','Berhasil Menyimpan !');
    }
    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Menu  $Menu
     * @return \Illuminate\Http\Response
     */
    public function show(Menu $Menu)
    {
        dd($Menu);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Menu  $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Menu $Menu)
    {
        $Menu = Menu::all();
        return view('menus.edit', compact('Menu'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Menu  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Menu $book)
    {
        $request->validate([
            'nama_menu'=>'required',
            'harga'=>'required',
            'deskripsi'=>'required',
            'ketersediaan'=>'required'
        ]);

        $Menu->update($request->all());
        return redirect()->route('menus.index')
                        ->with('success','Berhasil Update !');
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Menu  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Menu $Menu)
    {
        $Menu->delete();

        return redirect()->route('menus.index')
                        ->with('success','Berhasil Hapus !');
    }

}
