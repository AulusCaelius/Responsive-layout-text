function nav_side(){
	var left_side=document.getElementById('left_list');
	var left_side_zhezhao=document.getElementById('zhezhao');
	left_side.style.width="45%";
	left_side_zhezhao.style.display="block";
}
function nav_hidden(){
	var left_side=document.getElementById('left_list');
	var left_side_zhezhao=document.getElementById('zhezhao');
	left_side.style.width="0%";
	left_side_zhezhao.style.display="none";
}
function spring_nav(){
	var spring_title=document.getElementById('nav_side_li');
	spring_title.style.display="block";
}
