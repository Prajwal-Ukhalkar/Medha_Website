<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/bg.css" />
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link href="../../dist/output.css" rel="stylesheet">

    <script>
    tailwind.config = {
        theme: {
            extend: {
                fontFamily: {
                    sans: ["Inter", "sans-serif"],
                },
            },
        },
    };
    </script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="../js/teams.js"></script>

    <title>Teams</title>
</head>

<body>
    <?php
      include('navbar.php');
  ?>

    <div class="p-10 h-[100vh] w-[100vw] items-center">
        <h1 data-aos="flip-left" data-aos-duration=1000
            class="text-yellow-200 font-bold text-center text-5xl hidden sm:block">
            Medha Teams
        </h1>
        <div class="flex gap-4">
            <!-- Sidebar start -->
            <?php
            include('sidebar.php');
        ?>
            <!-- sidebar end -->
            <div class="flex w-full grid grid-cols-1 items-center gap-4 mt-5 sm:grid-cols-3" id="mainContainer">
                <button type="button"
                    class="w-full h-12 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                    Button
                </button>
                <button type="button"
                    class="w-full h-12 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                    Button
                </button>
                <a href=""
                    class="w-full h-15 text-center py-4 inline-block px-6 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">wjfnwrln</a><a
                    data-aos="zoom-in" href=""
                    class="w-full h-15 text-center py-4 inline-block px-6 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">wjfnwrln</a><a
                    href=""
                    class="w-full h-15 text-center py-4 inline-block px-6 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">wjfnwrln</a>
                <a href=""
                    class="w-full h-15 text-center py-4 inline-block px-6 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">wjfnwrln</a>
                <a href=""
                    class="w-full h-15 text-center py-4 inline-block px-6 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">wjfnwrln</a>
                <a href=""
                    class="w-full h-15 text-center py-4 inline-block px-6 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">wjfnwrln</a>
                <a href=""
                    class="w-full h-15 text-center py-4 inline-block px-6 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">wjfnwrln</a>
                <a href=""
                    class="w-full h-15 text-center py-4 inline-block px-6 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">wjfnwrln</a>
                <a href=""
                    class="w-full h-15 text-center py-4 inline-block px-6 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">wjfnwrln</a>
                <a href=""
                    class="w-full h-15 text-center py-4 inline-block px-6 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">wjfnwrln</a>
                <a href=""
                    class="w-full h-15 text-center py-4 inline-block px-6 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">wjfnwrln</a>
            </div>
        </div>
    </div>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
    AOS.init();
    </script>
</body>
<script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>

</html>