<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canlender</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <style>
        button {
            background: orange;
            margin-left: 86%;
            border: none;
            border-radius: 4px;
            padding: 10px;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <button class="add">Create Event</button>
    <div class="container">
        <div id="calendar"></div>
    </div>

</html>
<?php
require_once "database.php";
$statment = $connect->prepare("select * from vccalendar");
$statment->execute();
$datas = $statment->fetchAll();

?>

<script>
    let add = document.querySelector('.add');
    add.addEventListener('click', function() {
        $('#myModal').modal('toggle');
    })
    $(document).ready(function() {
        $('#calendar').fullCalendar({
            // dayClick: function(date, allDay, jsEvent, view) {
            //     var formattedDate = date.toString().replace(" GMT+0000", "");
            //     alert(formattedDate );
            // },
            scrollTime: '07:00:00',
            minTime: '07:00:00',
            maxTime: '18:00:00',
            defaultView: 'agendaWeek',
            hiddenDays: [0],
            // alldayslot: false,
            // selectable: true,
            // selectHelper: true,
            // select: function() {
            //     $('#myModal').modal('toggle');
            // },
            header: {
                left: 'month, agendaWeek, agendaDay, list',
                center: 'title',
                right: 'prev, today, next',
            },
            buttonText: {
                week: 'Week',
                today: 'Today',
                day: 'Day',
                month: 'Month',
                list: 'List',
            },
            events: [
                <?php
                foreach ($datas as $data) {
                    print_r($data);
                ?> {
                        title: '<?= $data[1] ?>',
                        start: '<?= $data[2]?>',
                        end: '<?= $data[3] ?>',
                        color: 'orange',
                        textColor: 'white',
                    },
                <?php
                };
                ?>
            ],
            dayRender: function(date, cell) {
                var today = $.fullCalendar.moment();
                if (date.get('date') == today.get('date')) {
                    cell.css('background', 'greenyellow');
                }
                var newdate = $.fullCalendar.formatDate(date, 'DD-MM-YYYY');
                if (newdate == '03-02-2024') {
                    cell.css('background', 'orange');
                } else if (newdate == '24-01-2024') {
                    cell.css('background', 'blue')
                }
            }
        });
    })
</script>
<?php
require_once "AddEvent.php";
?>

<?php
require_once "database.php";

// foreach ($data as $da) {
//     foreach ($da as $d) {
//         echo $d;
//         echo "\n";
//     }
//     echo "<br>";
// }
?>