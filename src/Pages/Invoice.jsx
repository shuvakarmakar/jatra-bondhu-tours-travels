import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "../assets/Jatra Bondhu Travel.png";
import signature from "../assets/signature.png";

const Invoice = () => {
    const [invoiceData, setInvoiceData] = useState({
        clientName: "",
        clientNumber: "",
        clientAddress: "",
        invoiceNumber: "",
        date: new Date().toISOString().slice(0, 10),
        pnr: "",
        ticketNumber: "",
        paymentMethod: "",
        paymentDate: "",
        products: [
            { product: "", description: "", quantity: 1, unitPrice: 0, total: 0 },
        ],
        total: 0,
    });

    const handleInputChange = (e, field, index) => {
        const value = e.target.value;

        if (["clientName", "clientNumber", "clientAddress", "invoiceNumber", "pnr", "ticketNumber", "paymentMethod", "paymentDate"].includes(field)) {
            setInvoiceData({ ...invoiceData, [field]: value });
        } else if (["product", "description", "quantity", "unitPrice"].includes(field)) {
            const updatedProducts = [...invoiceData.products];
            updatedProducts[index][field] = field === "quantity" || field === "unitPrice" ? parseFloat(value) || 0 : value;
            updatedProducts[index].total = updatedProducts[index].quantity * updatedProducts[index].unitPrice;

            const subtotal = updatedProducts.reduce((sum, product) => sum + product.total, 0);

            setInvoiceData({
                ...invoiceData,
                products: updatedProducts,
                subtotal,
                total: subtotal + 0,
            });

        }
    };

    const addProduct = () => {
        setInvoiceData({
            ...invoiceData,
            products: [
                ...invoiceData.products,
                { product: "", description: "", quantity: 1, unitPrice: 0, total: 0 },
            ],
        });
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        // Company Header
        doc.addImage(logo, "PNG", 20, 20, 20, 20);
        doc.setFontSize(14);
        doc.text("JATRA BONDHU TOURS & TRAVELS", 60, 20);
        doc.setFontSize(12);
        doc.text("37 New Chashara, Narayanganj", 60, 30);
        doc.text("Phone: +8801317-290009 | Facebook: facebook.com/JatraBondhu", 60, 40);

        // Client Information
        doc.setFontSize(11);
        doc.text(`Invoice To: ${invoiceData.clientName}`, 20, 50);
        doc.text(`Cell: ${invoiceData.clientNumber}`, 20, 60);
        doc.text(`Address: ${invoiceData.clientAddress}`, 20, 70);
        doc.text(`Invoice#: ${invoiceData.invoiceNumber}`, 140, 50);
        doc.text(`Date: ${invoiceData.date}`, 140, 60);

        // Product Table
        const tableData = invoiceData.products.map((product) => [
            product.product,
            product.description,
            product.quantity,
            product.unitPrice.toFixed(2),
            product.total.toFixed(2),
        ]);

        doc.autoTable({
            startY: 80,
            head: [["Product", "Description", "Quantity", "Unit Price (TK)", "Total (TK)"]],
            body: tableData,
            theme: "grid", // Adds gridlines for a cleaner look
            headStyles: {
                fillColor: [30, 144, 255], // Modern blue header
                fontStyle: 'bold',
                textColor: [255, 255, 255], // White text for header
                halign: 'center', // Center-align header text
                valign: 'middle',
            },
            bodyStyles: {
                fontSize: 10,
                textColor: [0, 0, 0], // Black text for the body
                halign: 'center', // Center-align body text
            },
            alternateRowStyles: {
                fillColor: [240, 248, 255], // Light blue for alternating rows
            },
            styles: {
                fontSize: 10,
                cellPadding: 4, // Adjust padding for better spacing
            },

        });

        // Totals
        const finalY = doc.lastAutoTable.finalY + 10;
        doc.setFont("helvetica", "bold");
        doc.text(`Total: ${invoiceData.total.toFixed(2)} TK`, 140, finalY + 10);

        // Payment Details
        doc.setFont("helvetica", "bold");
        doc.text(`PNR: ${invoiceData.pnr}`, 20, finalY + 30, { maxWidth: 170, align: "left" });
        doc.setFont("helvetica", "bold");
        doc.text(`Ticket Number: ${invoiceData.ticketNumber}`, 20, finalY + 40);
        doc.setFont("helvetica", "normal");
        doc.text(`Payment Method: ${invoiceData.paymentMethod}`, 20, finalY + 50);
        doc.text(`Payment Date: ${invoiceData.paymentDate}`, 20, finalY + 60);

        // Signature
        doc.addImage(signature, "PNG", 140, finalY + 40, 50, 15);
        doc.text("Authorized Signature", 150, finalY + 60);

        // Save PDF
        doc.save(`Invoice_${invoiceData.invoiceNumber}.pdf`);
    };

    return (
        <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 shadow-lg rounded-md">
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Invoice</h1>

                {/* Invoice Number */}
                <div className="mb-4">
                    <label className="block font-medium">Invoice Number:</label>
                    <input
                        type="text"
                        value={invoiceData.invoiceNumber}
                        onChange={(e) => handleInputChange(e, "invoiceNumber")}
                        className="w-full border p-2 rounded"
                    />
                </div>

                {/* Client Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block font-medium">Client Name:</label>
                        <input
                            type="text"
                            value={invoiceData.clientName}
                            onChange={(e) => handleInputChange(e, "clientName")}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Client Number:</label>
                        <input
                            type="text"
                            value={invoiceData.clientNumber}
                            onChange={(e) => handleInputChange(e, "clientNumber")}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-medium">Client Address:</label>
                    <input
                        type="text"
                        value={invoiceData.clientAddress}
                        onChange={(e) => handleInputChange(e, "clientAddress")}
                        className="w-full border p-2 rounded"
                    />
                </div>

                {/* Payment Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block font-medium">PNR:</label>
                        <input
                            type="text"
                            value={invoiceData.pnr}
                            onChange={(e) => handleInputChange(e, "pnr")}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Ticket Number:</label>
                        <input
                            type="text"
                            value={invoiceData.ticketNumber}
                            onChange={(e) => handleInputChange(e, "ticketNumber")}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Payment Method:</label>
                        <input
                            type="text"
                            value={invoiceData.paymentMethod}
                            onChange={(e) => handleInputChange(e, "paymentMethod")}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Payment Date:</label>
                        <input
                            type="date"
                            value={invoiceData.paymentDate}
                            onChange={(e) => handleInputChange(e, "paymentDate")}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                </div>

                {/* Products Section */}
                <div className="mb-4">
                    {invoiceData.products.map((product, index) => (
                        <div key={index} className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Product"
                                value={product.product}
                                onChange={(e) => handleInputChange(e, "product", index)}
                                className="border p-2 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                value={product.description}
                                onChange={(e) => handleInputChange(e, "description", index)}
                                className="border p-2 rounded"
                            />
                            <input
                                type="number"
                                placeholder="Quantity"
                                value={product.quantity}
                                onChange={(e) => handleInputChange(e, "quantity", index)}
                                className="border p-2 rounded"
                            />
                            <input
                                type="number"
                                placeholder="Unit Price"
                                value={product.unitPrice}
                                onChange={(e) => handleInputChange(e, "unitPrice", index)}
                                className="border p-2 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Total"
                                value={product.total.toFixed(2)}
                                readOnly
                                className="border p-2 rounded bg-gray-100"
                            />
                        </div>
                    ))}
                    <button
                        onClick={addProduct}
                        className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                    >
                        Add Product
                    </button>
                </div>

                {/* Download Button */}
                <button
                    onClick={handleDownloadPDF}
                    className="mt-8 bg-green-500 text-white px-6 py-3 rounded w-full sm:w-auto"
                >
                    Download Invoice
                </button>
            </div>
        </div>
    );
};

export default Invoice;
