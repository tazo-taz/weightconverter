txt = document.querySelector('#txt');
nums1 = document.querySelector('#nums1');
nums2 = document.querySelector('#nums2');
nums3 = document.querySelector('#nums3');
fullcard = document.querySelector('.fullcard');

txt.addEventListener('input',show);

function show(){
		fullcard.style.visibility = 'visible';
		nums1.innerHTML = txt.value * 0.00220462262 ;
		nums2.innerHTML = txt.value * 16 ;
		nums3.innerHTML = txt.value * 0.001;
		if(txt.value == ''){
		fullcard.style.visibility = 'hidden';
	}
	
}