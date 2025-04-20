<?php
// This file is generated. Do not modify it manually.
return array(
	'furryblock' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpdev/furryblock',
		'version' => '0.1.0',
		'title' => 'Furryblock',
		'category' => 'widgets',
		'icon' => 'slider',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'furryblock',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'images' => array(
				'imageUrl' => array(
					'type' => 'string',
					'default' => ''
				),
				'imageAlt' => array(
					'type' => 'string',
					'default' => ''
				),
				'default' => array(
					
				)
			)
		)
	)
);
