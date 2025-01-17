export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center h-28 bg-slate-400 text-white">
        <p className="text-center">
          © 2024 VelvetReek |{" "}
          <a href="https://github.com/VelvetReek/" className=" text-black">
            Github
          </a>
        </p>

        <p className="text-center">
          Made with <span className="text-red-500">❤</span> in India
        </p>
      </div>
    </footer>
  );
}
