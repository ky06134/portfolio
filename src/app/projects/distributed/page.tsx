import Tools from "@/app/ui/tools";

export default function Hack8() {

  const tools = ["java", "git", "github",]

  return (
    <div className="mb-15 md:mb-40">
      <div className="flex flex-col items-center justify-center bg-gray-50 md:px-20 p-5 md:py-20 py-10">
        <div className="font-bold md:text-4xl md:pb-5 pb-1 text-black text-2xl">Distributed Project: FTP Server</div>
        <div className="text-black md:text-xl text-sm text-center"> Java implementation of an FTP Server </div>
      </div>
      <div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          What it does
        </div>
        <div className="px-5 lg:mx-40">This project is a Java-based FTP (File Transfer Protocol) system that includes both a client and a server application. It replicates the basic functionality of a traditional FTP server, allowing users to upload, download, delete, rename, and list files remotely. The system was built from scratch using low-level Java socket programming, without any third-party libraries. Its goal was to demonstrate how file transfer protocols work under the hood and to gain hands-on experience with networked systems and concurrency in Java.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Role
        </div>
        <div className="px-5 lg:mx-40">My role in this project was that of a Backend Developer and Systems Architect. I was responsible for designing and implementing the client-server architecture, managing socket communication, and building the server logic to handle concurrent client connections. I also designed the command-handling protocol and worked on the file system operations to ensure data consistency and error handling.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Accomplishments
        </div>
        <div className="px-5 lg:mx-40">One of the biggest accomplishments was building a fully multi-threaded FTP server that can handle multiple clients at once. I implemented reliable file upload/download logic using Java I/O streams and designed a flexible command-response structure similar to real FTP protocols. The server maintains stable long-term connections and supports multiple file operations with appropriate feedback and error messages. The system’s modular design allows for easy extension of additional commands or features in the future.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Challenges
        </div>
        <div className="px-5 lg:mx-40">The most significant challenges came from handling concurrent access and ensuring thread-safe file operations. Java’s concurrency model had to be used carefully to avoid race conditions and file corruption when multiple clients accessed the same resources. Designing a clear and scalable internal command protocol was also complex, especially when simulating real FTP behavior. Additionally, testing the system for reliability under various simulated network conditions—such as latency or disconnections—required custom testing tools and setups.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Tools Used
        </div>
        <div className="flex flex-row items-center px-5 lg:mx-40">
          <Tools strings={tools} />
        </div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Resources
        </div>
        <ul className="px-10 lg:mx-40 hover:text-blue-400 list-disc">
          <li>
            <a href="https://github.com/ky06134/Distributed-Project" target="_blank">GitHub Repo</a>
          </li>
        </ul>
      </div>
    </div>
  );
}