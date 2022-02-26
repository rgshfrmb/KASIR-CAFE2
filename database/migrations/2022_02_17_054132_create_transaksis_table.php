<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaksis', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('nama_pelanggan');
            $table->unsignedBigInteger('nama_menu');
            $table->integer('jumblah');
            $table->integer('total_harga');
            $table->unsignedBigInteger('nama_pegawai');
            $table->timestamps();


            $table->foreign('nama_pelanggan')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('nama_menu')->references('id')->on('menus')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('nama_pegawai')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transaksis');
    }
};
