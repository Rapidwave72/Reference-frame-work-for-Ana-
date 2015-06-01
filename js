$('.hide-password').on('click', function(){
  var $this= $(this),
    $password_field = $this.prev('input');
    
    ( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
    ( 'Hide' == $this.text() ) ? $this.text('Show') : $this.text('Hide');
    //focus and move cursor to the end of input field
    $password_field.putCursorAtEnd();
});

$(window).on('scroll', function(){
	$timeline_block.each(function(){
		if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		}
	});
});
.cd-section {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0s 0.4s;
}
.cd-section.cd-selected {
  position: relative;
  z-index: 2;
  transform: translateX(0);
  transition: transform 0.4s 0s;
}

.cd-form .icon input, .cd-form .icon select, .cd-form .icon textarea {
 	padding-left: 54px !important;
}
.cd-form .user {
 	background: url("../img/cd-icon-user.svg") no-repeat 16px center;
}
.cd-form [required].user {
 	background: url("../img/cd-icon-user.svg") no-repeat 16px center, 
 				url("../img/cd-required.svg") no-repeat top right;
}

$('.cd-nav li').on('click', function(event){
	event.preventDefault();
	var target = $(this),
		//detect which section user has chosen
		sectionTarget = target.data('menu');
	if( !target.hasClass('cd-selected') ) {
		//if user has selected a section different from the one alredy visible
		//update the navigation -> assign the .cd-selected class to the selected item
		target.addClass('cd-selected').siblings('.cd-selected').removeClass('cd-selected');
		//load the new section
		loadNewContent(sectionTarget);
	} else {
		// otherwise close navigation
		toggleNav(false);
	}
});
function loadNewContent(newSection) {
	//create a new section element and insert it into the DOM
	var section = $('<section class="cd-section '+newSection+'"></section>').appendTo($('main'));
	//load the new content from the proper html file
	section.load(newSection+'.html .cd-section > *', function(event){
		//add the .cd-selected to the new section element -> it will cover the old one
		section.addClass('cd-selected').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			//close navigation
			toggleNav(false);
		});
		section.prev('.cd-selected').removeClass('cd-selected');
	});
 
	$('main').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
		//once the navigation is closed, remove the old section from the DOM
		section.prev('.cd-section').remove();
	});
 
	if( $('.no-csstransitions').length > 0 ) {
		//detect if browser supports transitions
		toggleNav(false);
		section.prev('.cd-section').remove();
	}
}


if( $('.floating-labels').length > 0 ) floatLabels();
 
function floatLabels() {
	var inputFields = $('.floating-labels .cd-label').next();
	
	inputFields.each(function(){
		var singleInput = $(this);
		
		singleInput.keyup(function(){
			checkVal(singleInput);	
		});
	});
}

<script type="text/javascript">
	$("#flipbook").turn({
		width: 400,
		height: 300,
		autoCenter: true
	});
</script>
<script type="text/javascript">
	$("#flipbook").turn({
		width: 400,
		height: 300,
		autoCenter: true
	});
</script>

$(window).on('scroll', function(){
	$timeline_block.each(function(){
		if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		}
	});
});
