$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}

function asset(id){
	var weba = ['https://itch.io/game-assets/free/tag-background','https://opengameart.org/content/background-art-collection','https://www.gamedevmarket.net/category/2d/backgrounds/?type=free','https://bevouliin.com/tag/game-backgrounds/','https://www.gameartguppy.com/product-category/game-art-background-sprites/'];
	var webt = ['itch.io','OpenGameArt.org','GameDev Market','Bevouliin','GameArtGuppy'];
	var btn = ['btn-primary','btn-info','btn-success','btn-warning','btn-danger','btn-rose',''];
	var isi=''; 
	var idx=0;
	if(id){
	for(i=0;i<webt.length;i++){
	idx = Math.floor(Math.random() * 7);  
	  isi = isi+'<button title="Klik untuk membuka halaman '+webt[i]+'" class="btn '+btn[idx]+' btn-small" style="cursor:pointer;" onclick="window.open(\''+weba[i]+'\');">'+webt[i]+'</button>';
	}
	bootbox.alert({title:'Suasana / Gambar Latar',message:'<p style="font-family:\'playtime\' !important;">'+isi+'<p>',size:'large'});
	}else{
	for(i=0;i<webt.length;i++){
	idx = Math.floor(Math.random() * 7);  
	  isi = isi+'<button title="Click to open '+webt[i]+' page" class="btn '+btn[idx]+' btn-small" style="cursor:pointer;" onclick="window.open(\''+weba[i]+'\');">'+webt[i]+'</button>';
	}
	bootbox.alert({title:'Ambiences / Backgrounds',message:'<p style="font-family:\'playtime\' !important;">'+isi+'<p>',size:'large'});		
	}
  }
  
function samples(id){//https://github.com/cimo95/monichat/blob/sampel/
	var weba = ['Qikyuu_%20-%20Aku%20Bingung!.rar','Qikyuu_%20-%20Sampah%20!.mcx','Arachmadi_-_Original%20DDES%20Spaceroom%20Monika.mcx'];
	var webt = ['Aku Bingung! (Oleh : Qikyuu_) (Indonesian)','Sampah! (Oleh : Qikyuu_) (Indonesian)','Original DDES Spaceroom Monika (Oleh : Arachmadi) (Indonesian)'];
	var btn = ['btn-primary','btn-info','btn-success','btn-warning','btn-danger','btn-rose',''];
	var isi=''; 
	var idx=0;
	if(id){
	for(i=0;i<webt.length;i++){
	idx = Math.floor(Math.random() * 7);  
	  isi = isi+'<button title="Klik untuk mengunduh sampel cerita \''+webt[i]+'\'" class="btn '+btn[idx]+' btn-small" style="cursor:pointer;" onclick="window.open(\'https://github.com/cimo95/monichat/raw/sampel/'+weba[i]+'\');">'+webt[i]+'</button>';
	}
	bootbox.alert({title:'Pencair Ide / Sampel Cerita',message:'<p style="font-family:\'playtime\' !important;">'+isi+'<p>',size:'large'});
	}else{
	for(i=0;i<webt.length;i++){
	idx = Math.floor(Math.random() * 7);  
	  isi = isi+'<button title="Click to download \''+webt[i]+'\' story sample" class="btn '+btn[idx]+' btn-small" style="cursor:pointer;" onclick="window.open(\''+weba[i]+'\');">'+webt[i]+'</button>';
	}
	bootbox.alert({title:'Mind Melter / Story Samples',message:'<p style="font-family:\'playtime\' !important;">'+isi+'<p>',size:'large'});		
	}
  }

function asseten(){asset(false);}
function samplesen(){samples(false);}
function tentangen(){
    bootbox.alert({title:'About MoniChat',message:'<h4 style="font-family:\'playtime\' !important;">The following name describes people who get involved to this MoniChat project:<ul><li>Programmer : Arachmadi Putra</li><li>Script Design : Aurelia Noumi</li><li>Sample Writer : <code>14D616E646160244964716</code></li><li>Website Template : Creative Tim</li><li>Wouᴉʞɐ : Monika After Story (MAS) Project</li><li>All DDLC Original Assets Owner : Team Salvato</li></ul></h4>'});
  }
function assetid(){asset(true);}
function samplesid(){samples(true);}
  function tentangid(){
    bootbox.alert({title:'Tentang MoniChat',message:'<h4 style="font-family:\'playtime\' !important;">Nama berikut ini adalah orang-orang yang terlibat dalam proyek MoniChat :<ul><li>Programmer : Arachmadi Putra</li><li>Desain Skrip : Aurelia Noumi</li><li>Penulis Sampel : <code>Qikyuu_</code></li><li>Templat Website : Creative Tim</li><li>Wouᴉʞɐ : Monika After Story (MAS) Project</li><li>Pemilik Seluruh Aset Asli DDLC : Team Salvato</li></ul></h4>'});
  }
function goget(){
	var x = $.urlParam('cerita');
	if(x != null){
		x = atob(decodeURIComponent(x));
		location.assign('https://github.com/cimo95/monichat/raw/sampel/'+x);
	};
	var y = $.urlParam('anyar');
	if(y != null){
		y = atob(decodeURIComponent(y)); //
		location.assign('https://github.com/cimo95/monichat/releases/download/'+y);
	};	
};
function doget(id){
	var x = id?'ID':'EN';
	bootbox.hideAll();
	window.open('https://github.com/cimo95/monichat/releases/download/2.0/MoniChat20B.'+x+'.rar');
}
function popget(id){
	var x = id?'<li>Gunakan WinRAR 5.0 untuk membuka</li><li>Kata sandi : ɾnsʇɯouᴉʞɐ<br><small>atau temukan di komentar WinRAR ketika kamu membuka rilis ini</li>':'<li>Use WinRAR 5.0 to open this release</li><li>Password : ɾnsʇɯouᴉʞɐ<br><small>or find out the password inside WinRAR comment<br>when you open this release</li>';
	bootbox.alert({title:'Download MoniChat',message:'<div class="row"><div class="col-md-12"><ul>'+x+'</ul></div></div><div class="row"><div class="col-md-6"><button class="btn btn-info btn-lg btn-block" onclick="doget(true);"><b>MoniChat ver 2.0</b><br>Bahasa Indonesia</button></div><div class="col-md-6"><button class="btn btn-danger btn-lg btn-block"  onclick="doget(false);"><b>MoniChat ver 2.0</b><br>English (international)</button></div></div>'});
}