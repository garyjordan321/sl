function detectmob() {
	if (navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i)
	) {
		return true;
	} else {
		return false;
	}
}
if (detectmob() == false) {
    if (jQuery('#mobkoihalfpage').length) {
        jQuery('#mobkoihalfpage').remove();
    }
}

//if (detectmob() == false) {
//	/*
//	//jQuery('#pSidebar').html('<div id="div-gpt-ad-4773716-2" style="width:100%">');
//	//jQuery('<script>googletag.cmd.push(function() { googletag.display("div-gpt-ad-4773716-2"); });</' + 'script></div>').appendTo('#pSidebar');*/
//	if (jQuery('#pSidebar').length) {
//		jQuery('#pSidebar').html('<div id="div-gpt-ad-4773716-2" style="width:100%">');
//		jQuery('<script>window.browsitag.cmd.push(() => { window.browsitag.display("div-gpt-ad-4773716-2", { sizes: [{ w: 300, h: 250 }, { w: 300, h: 600 }], adUnit: "/1021996/Medium_Rectangle", disableViewabilityOptimization: false, positionTag: "in-content", })});</' + 'script></div>').appendTo('#pSidebar');
//	}
//	
//	if (jQuery('#desktopArchiveAd').length) {
//		/*
//		jQuery('#desktopArchiveAd').html('<div id="div-gpt-ad-4773716-1_1" style="width:100%">');
//		jQuery('<script>googletag.cmd.push(function() { googletag.display("div-gpt-ad-4773716-1_1"); });</' + 'script></div>').appendTo('#desktopArchiveAd');
//		*/
//
//		jQuery('#desktopArchiveAd').html('<div id="div-gpt-ad-4773716-2" style="width:100%">');
//		jQuery('<script>window.browsitag.cmd.push(() => { window.browsitag.display("div-gpt-ad-4773716-2", { sizes: [{ w: 300, h: 250 }, { w: 300, h: 600 }], adUnit: "/1021996/Medium_Rectangle", disableViewabilityOptimization: false, positionTag: "in-content", })});</' + 'script></div>').appendTo('#desktopArchiveAd');
//	}
//	
//	
//}
//else
//{
//	if (jQuery('#pHeroMob').length) {
//		/*jQuery('#pHeroMob').html('<div id="div-gpt-ad-4773716-2_1" style="width:100%">');
//		jQuery('<script>googletag.cmd.push(function() { googletag.display("div-gpt-ad-4773716-2_1"); });</' + 'script></div>').appendTo('#pHeroMob');*/
//		jQuery('#pHeroMob').html('<div id="div-gpt-ad-4773716-2" style="width:100%">');
//		jQuery('<script>window.browsitag.cmd.push(() => { window.browsitag.display("div-gpt-ad-4773716-2", { sizes: [{ w: 300, h: 250 }, { w: 300, h: 600 }], adUnit: "/1021996/Medium_Rectangle", disableViewabilityOptimization: false, positionTag: "in-content", })});</' + 'script></div>').appendTo('#pHeroMob');
//	}
//	
//	if (jQuery('#mobileArchiveAd').length) {
//		/*
//		jQuery('#mobileArchiveAd').html('<div id="div-gpt-ad-4773716-2_1" style="width:100%">');
//		jQuery('<script>googletag.cmd.push(function() { googletag.display("div-gpt-ad-4773716-2_1"); });</' + 'script></div>').appendTo('#mobileArchiveAd');*/
//		jQuery('#mobileArchiveAd').html('<div id="div-gpt-ad-4773716-2" style="width:100%">');
//		jQuery('<script>window.browsitag.cmd.push(() => { window.browsitag.display("div-gpt-ad-4773716-2", { sizes: [{ w: 300, h: 250 }, { w: 300, h: 600 }], adUnit: "/1021996/Medium_Rectangle", disableViewabilityOptimization: false, positionTag: "in-content", })});</' + 'script></div>').appendTo('#mobileArchiveAd');
//	}
//}