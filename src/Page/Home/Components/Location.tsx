import React from "react";

const Location = () => {
	return (
		<div className="w-full py-16 bg-[#232323]">
			<div className="px-8 text-white mb-8">
				<h2 className="text-2xl mb-4 text-center">FIND US ON THE MAP</h2>
			</div>

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3919.4474729196054!2d106.69272717463127!3d10.776999459183989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1681777158793!5m2!1sen!2s"
				width="360"
				height="300"
				style={{ border: "none", width: "100%", height: "400px" }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>
	);
};

export default Location;
