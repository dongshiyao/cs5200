import React from 'react';
import '../css/page_footer.css';

class PageFooter extends React.Component {
	constructor() {
		super();

	}

	render() {

		// react has crappy support for svg so styling had to be here
		var svgString = '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="187.71913" height="85.013626" id="svg2985" xml:space="preserve"><metadata id="metadata2991"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs2989"><clipPath id="clipPath2999"><path d="m 0,121.961 243.927,0 L 243.927,0 0,0 0,121.961 z" id="path3001" /></clipPath></defs><g transform="matrix(1.25,0,0,-1.25,-13.850625,118.73238)" id="g2993"><g transform="translate(28.0225,30.0059)" id="g3003"><path d="m 0,0 0,24.1 0,0.843 16.72,0 0,12.208 -16.72,0 0,9.875 c 0,0 0.157,3.111 3.422,3.111 l 19.751,0 0,12.443 -25.194,0 c -3.112,0 -12.521,-2.88 -12.521,-12.523 L -14.542,0 0,0 z" id="path3005" style="fill:#2d2c2e;fill-opacity:1;fill-rule:nonzero;stroke:none" /></g><g transform="translate(91.0273,30.0059)" id="g3007"><path d="m 0,0 0,24.1 0,0.843 16.72,0 0,12.208 -16.72,0 0,9.875 c 0,0 0.157,3.111 3.422,3.111 l 19.751,0 0,12.443 -25.194,0 c -3.112,0 -12.521,-2.88 -12.521,-12.523 L -14.542,0 0,0 z" id="path3009" style="fill:#2d2c2e;fill-opacity:1;fill-rule:nonzero;stroke:none" /></g><path d="m 55.321,92.585 14.962,0 0,-63.21 -14.962,0 0,63.21 z" id="path3019" style="fill:#2d2c2e;fill-opacity:1;fill-rule:nonzero;stroke:none" /><g transform="translate(156.2568,87.6221)" id="g3021"><path d="m 0,0 c -3.021,3.679 -7.854,4.963 -9.922,4.963 l -15.272,0 c -2.068,0 -6.9,-1.284 -9.922,-4.963 -1.526,-1.861 -2.599,-4.321 -2.599,-7.559 l 0,-50.057 14.542,0 0,24.099 0,0.844 0,12.208 0,9.875 c 0,0 0.156,3.111 3.422,3.111 l 4.386,0 c 3.265,0 3.423,-3.111 3.423,-3.111 l 0,-9.875 0,-3.177 -8.195,0 0,-12.523 8.195,0 0,-21.451 14.541,0 0,50.057 C 2.599,-4.321 1.526,-1.861 0,0" id="path3023" style="fill:#2d2c2e;fill-opacity:1;fill-rule:nonzero;stroke:none" /></g></g></svg>'

    const footerMenuLink = (
			<div id="footer-menu-links-container">
				<ul id="footer-menu-links">
					<li id = "menu-item-1">
						<a>CS5200</a>
					</li>
					<li id = "menu-item-2">
						<a>Datebase Management</a>
					</li>
					<li id = "menu-item-3">
						<a>Chi Zhang</a>
					</li>
					<li id = "menu-item-4">
						<a>Shiyao Dong</a>
					</li>
				</ul>
			</div>
		);

		const footerAddress = (
			<div id="footer-address">
				<address>
					<p>401 Terry Ave N, Seattle WA, 98109
						<a className="tel" >zhang.chi5@husky.neu.edu</a>
						<a className="tel" >dong.shi@husky.neu.edu</a>
					</p>
				</address>
				<p>© 2018 JustLetMeGraduate</p>
			</div>
		);

		const desktopView =  (
			<div id="menu-footer-area">
				<div id="menu-footer-inner-container">
					<div id="footer-logo">
            <div id="footer-logo-svg" dangerouslySetInnerHTML={{ __html: svgString}} />
					</div>
					<div id="footer-nav">
            {footerMenuLink}
						{footerAddress}
					</div>
				</div>
			</div>
		);

		return desktopView;
	}
}

export default PageFooter;
