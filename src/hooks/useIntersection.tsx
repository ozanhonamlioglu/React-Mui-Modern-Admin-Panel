import { useEffect } from "react";

const useIntersection = (querySelector: string, target: string, options?: IntersectionObserverInit) => {
	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add(target);
				} else {
					entry.target.classList.remove(target);
				}
			});
		}, options);

		const elements = document.querySelectorAll(querySelector);

		elements.forEach(element => {
			observer.observe(element);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return null;
};

export default useIntersection;
