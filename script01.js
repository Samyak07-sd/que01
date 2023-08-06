<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Dashboard</title>
</head>
<body>
<header>
<h1>Dashboard</h1>
<h2>Total Orders: <span id="total-orders">5</span></h2>
<select id="currency">
<option value="USD">USD</option>
<option value="EUR">EUR</option>
<option value="GBP">GBP</option>
</select>
</header>
<table id="orders">
<thead>
<tr>
<th>Order ID</th>
<th>Order Submitted Date</th>
<th>Order Volume</th>
<th>Currency</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>2023-08-01</td>
<td>100</td>
<td>USD</td>
</tr>
<tr>
<td>2</td>
<td>2023-08-02</td>
<td>200</td>
<td>USD</td>
</tr>
<tr>
<td>3</td>
<td>2023-08-03</td>
<td>300</td>
<td>USD</td>
</tr>
<tr>
<td>4</td>
<td>2023-08-04</td>
<td>400</td>
<td>USD</td>
</tr>
<tr>
<td>5</td>
<td>2023-08-05</td>
<td>500</td>
<td>USD</td>
</tr>
</tbody>
</table>
<script>
const orders = [
{
id: 1,
submittedDate: "2023-08-01",
volume: 100,
currency: "USD"
},
{
id: 2,
submittedDate: "2023-08-02",
volume: 200,
currency: "USD"
},
{
id: 3,
submittedDate: "2023-08-03",
volume: 300,
currency: "USD"
},
{
id: 4,
submittedDate: "2023-08-04",
volume: 400,
currency: "USD"
},
{
id: 5,
submittedDate: "2023-08-05",
volume: 500,
currency: "USD"
}
];

const totalOrders = orders.length;
document.getElementById("total-orders").innerHTML = totalOrders;

const currency = document.getElementById("currency");
currency.addEventListener("change", () => {
const selectedCurrency = currency.value;
orders.forEach((order) => {
order.currency = selectedCurrency;
});
});

const ordersTable = document.getElementById("orders");
ordersTable.querySelectorAll("td[data-order-id]").forEach((td) => {
const orderId = td.dataset.orderId;
td.innerHTML = orders.find((order) => order.id === orderId).submittedDate;
});
</script>
</body>
</html>

