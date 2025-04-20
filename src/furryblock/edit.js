/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
	InspectorControls
} from '@wordpress/block-editor';
import {
	Button
} from "@wordpress/components";
import {
	Fragment
} from "@wordpress/element";

import ServerSideRender from "@wordpress/server-side-render";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const BLockProps = useBlockProps();
	const {imageUrl,imageAlt}=attributes.images;
	const onSelectImage = (media) => {
  const newImage = media.map(img=>({
			imageUrl: img.url,
			imageAlt: img.alt,
		}))
	const merge = attributes.images.concat(newImage);
	setAttributes({images:merge});
	};

	return (
		<div className="swiper-block" {...BLockProps}>
			<div className="swiper-block-content">
			{attributes.images.map((img,index)=>(
			  <figure>
					<img id={index} src={img.imageUrl} alt={img.imageAlt} style={{ maxWidth:'100%' }} />
				</figure>
			))}
			</div>
	   <InspectorControls>
     	<MediaUploadCheck>
					<MediaUpload
					onSelect={onSelectImage}
					multiple
					allowedType={['image']}
					value={attributes.images}
					render={({open})=>(
						<Button onClick={open} isPrimary>
							Upload Image
						</Button>
					)}
					/>
				</MediaUploadCheck>
			</InspectorControls>
			<ServerSideRender block="wpdev/furryblock" attributes={attributes} />
		</div>
	);
}
