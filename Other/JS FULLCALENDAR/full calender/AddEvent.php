<form action="#" method="post">
    <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Create Event</h4>
                </div>
                <div class="modal-body">
                    <div class="title">
                        <label for="tile">Title</label>
                        <input type="text" name="title" class="form-control">
                    </div>
                    <div class="date">
                        <label for="start-date">Start Date</label>
                        <input type="date" name="start-date" class="form-control">
                    </div>
                    <div class="date">
                        <label for="start-date">end Date</label>
                        <input type="date" name="end-date" class="form-control">
                    </div>
                    <div class="date">
                        <label for="start-date">Time Start</label>
                        <input type="text" name="time-start" class="form-control">
                    </div>
                    <div class="date">
                        <label for="start-date">Time End</label>
                        <input type="text" name="time-end" class="form-control">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancal</button>
                    <button type="submit" class="submit btn">Create Event</button>
                </div>
            </div>
        </div>
    </div>
</form>

<?php
require_once "database.php";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $start_date = $_POST['start-date'];
    $end_date = $_POST['end-date'];
    $time_start = $_POST['time-start'];
    $time_end = $_POST['time-end'];
    if (!empty($title) & !empty($start_date) & !empty($end_date) & !empty($time_start) & !empty($time_end)) {
        $sec = $connect->prepare('insert into vccalendar (title, start_date, end_date, time_start, time_end)
        values(:title, :start_date, :end_date, :time_start, :time_end)');
        $sec->execute([
            ":title" => $title,
            ":start_date" => $start_date,
            ":end_date" => $end_date,
            ":time_start" => $time_start,
            ":time_end" => $time_end
        ]);
    } else {
        error_log("Missing some information");
    }
}
?>