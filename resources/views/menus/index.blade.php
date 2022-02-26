@extends('layouts.master')
@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Data Menu</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-success" href="{{ route('menus.create') }}"> Create</a>
            </div>
        </div>
    </div>
    <br>
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
     
    <table class="table table-bordered">
        <tr>
            <th>No</th>
            <th>Nama Menu</th>
            <th>Harga</th>
            <th>Deskripsi</th>
            <th>Ketersediaan</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($menus as $Menu)
        <tr>
            <td>{{ ++$i }}</td>
            <td>{{ $Menu->nama_menu }}</td>
            <td>{{ $Menu->harga }}</td>
            <td>{{ $Menu->deskripsi }}</td>
            <td>{{ $Menu->ketersediaan }}</td>
            <td>
                <form action="{{ route('menus.destroy',$Menu->id) }}" method="POST">
           
                    <a class="btn btn-primary" href="{{ route('menus.edit',$Menu->id) }}">Edit</a>
     
                    @csrf
                    @method('DELETE')
        
                    <button type="submit" class="btn btn-danger">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </table>
    
    {!! $menus->links() !!}
        
@endsection