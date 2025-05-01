import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-black">
      <div className="elfsight-app-184068b6-1d45-43eb-abd5-2c9b78ed8373" data-elfsight-app-lazy></div>
    </div>
  );
}
