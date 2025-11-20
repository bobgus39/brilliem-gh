import { Button } from "@heroui/button";

export default function ScrollToContent({targetId = "contenido"}) {
  const handleScroll = () => {
    const target = document.getElementById(targetId); // Ajusta el id según tu sección
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={handleScroll}
      variant="ghost"
      className="flex items-center justify-center rounded-full p-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="53"
        height="20"
        viewBox="0 0 53 20"
        fill="currentColor"
      >
        <polygon points="26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779" />
      </svg>
    </Button>
  );
}
