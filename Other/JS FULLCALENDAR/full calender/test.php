<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.js"></script>
</head>
<body>
    <div class="container">
        <div id="calendar">

        </div>
    </div>
</body>
</html>

<script>
    $(document).ready(function(){
        $('#calendar').fullCalendar({
            header: {
                left : 'month, agendaWeek, agendaDay, list',
                center : 'title',
            },
            buttonText: {
                week: 'Week',
                today: 'Today',
                day: 'Day',
                month: 'Month',
                list: 'List'
            },
            minTime: '07:00:00',
            maxTime: '18:00:00',
            defaultView: 'agendaWeek',
            hiddenDays : [0],
            events: [
                {
                    title: 'Node',
                    start: '2024-01-29T07:30',
                    end: '2024-01-29T09:00',
                },
                {
                    title: 'Node',
                    start: '2024-01-29T10:00',
                    end: '2024-01-29T11:30',
                }
            ]
        })
    })
</script>