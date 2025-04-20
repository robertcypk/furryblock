<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$attributes = $attributes['images'] ?? [];

if(function_exists('swiper_slider')){
// production env
}else{
// deveploment env
	function swiper_slider($attr){
		foreach($attr as $attr){
			echo '<div class="swiper-slide">';
			echo '<img src="'.$attr['imageUrl'].'" altr="'.$attr['imageAlt'].'" width="100%" />';
			echo '</div>';
		}
	}

}
?>
<!-- swipper lider -->
<div class="swiper">
<?php if(!empty($attributes) && is_array($attributes)): ?>
<div class="swiper-wrapper">
<?php echo swiper_slider($attributes); ?>
</div>
<div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div>
<div class="swiper-pagination"></div>
<?php endif; ?>
</div>
