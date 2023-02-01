import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
				<span>
					Thiago Machado <b>{new Date().getFullYear()}</b>
				</span>
		</footer>
        </div>
    );
}

export default Footer;
