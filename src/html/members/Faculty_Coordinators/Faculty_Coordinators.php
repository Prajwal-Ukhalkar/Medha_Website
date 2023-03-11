<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../../../css/bg.css" />
    <link href="../../../../dist/output.css" rel="stylesheet">
    <script src="Faculty_Coordinators.js"></script>

    <title>Faculty Coordinators Comittee Members</title>
</head>

<body>
    <?php
      include('../navbar_member.php');
  ?>

    <div class="p-10 h-[100vh] w-[100vw] items-center">
        <h1 class="text-yellow-200 font-bold text-center text-3xl">
            Faculty Coordinators Comittee
        </h1>
        <div class="flex gap-4">
            <!-- grid -->
            <div class="flex gap-5 mx-2 md:mx-10">
                <!-- Sidebar start -->
                <?php
      include('../sidebar_member.php');
  ?>
                <!-- sidebar end -->

            </div>
            <div id="membersGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"></div>
        </div>
    </div>
</body>

</html>