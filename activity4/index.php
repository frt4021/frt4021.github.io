<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Calculator</title>
    <meta name="description" content="CENG 311 Inclass Activity 4" />
</head>

<body>

    <?php
    $rates = array(
        'USD_to_CAD' => 1.35,
        'USD_to_EUR' => 0.92,
        'CAD_to_USD' => 0.74,
        'CAD_to_EUR' => 0.68,
        'EUR_to_USD' => 1.09,
        'EUR_to_CAD' => 1.47
    );

    $from_amount = isset($_GET['from_amount']) ? $_GET['from_amount'] : '';
    $from_currency = isset($_GET['from_currency']) ? $_GET['from_currency'] : '';
    $to_currency = isset($_GET['to_currency']) ? $_GET['to_currency'] : '';

    $to_amount = '';
    if (!empty($from_amount) && !empty($from_currency) && !empty($to_currency)) {
        $exchange_key = $from_currency . '_to_' . $to_currency;
        $exchange_rate = isset($rates[$exchange_key]) ? $rates[$exchange_key] : 1;
        $to_amount = $from_amount * $exchange_rate;
    }
    ?>

    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="GET">
        <table>
            <tr>
                <td>
                    From:
                </td>
                <td>
                    <input type="text" name="from_amount" value="<?php echo $from_amount; ?>">
                </td>

                <td>
                    Currency:
                </td>
                <td>

                    <select name="from_currency">
                        <?php
                        $currencies = array("USD", "CAD", "EUR");
                        foreach ($currencies as $currency) {
                            echo "<option value=\"$currency\"";
                            if ($from_currency == $currency) echo " selected";
                            echo ">$currency</option>";
                        }
                        ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    To:
                </td>
                <td>
                    <input type="text" name="to_amount" value="<?php echo $to_amount; ?>" readonly>
                </td>
                <td>
                    Currency:
                </td>
                <td>

                    <select name="to_currency">
                        <?php
                        foreach ($currencies as $currency) {
                            echo "<option value=\"$currency\"";
                            if ($to_currency == $currency) echo " selected";
                            echo ">$currency</option>";
                        }
                        ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td>

                </td>
                <td>

                </td>
                <td>

                </td>
                <td>
                    <input type="submit" value="Convert" />
                </td>
            </tr>
        </table>
    </form>

</body>

</html>
