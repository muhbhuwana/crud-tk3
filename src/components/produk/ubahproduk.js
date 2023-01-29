import React from 'react';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import './css/produk.css'

const UbahProduk = () => {
    return (
        <div className="tambahprodukcontainer">
            <Container>
                <Form className="">
                <div className="loginform">
                    <h3 className="text-center mb-4">TAMBAH PRODUK</h3>
                    <FormGroup floating>
                    <Input
                        id="namaProduk"
                        name="namaProduk"
                        placeholder="Nama Produk"
                        type="text"
                    />
                    <Label for="namaProduk">
                        Nama Produk
                    </Label>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                    <Input
                        id="gambarProduk"
                        name="gambarProduk"
                        placeholder="Gambar Produk"
                        type="file"
                    />
                    </FormGroup>
                    {' '}
                    <FormGroup floating>
                    <Input
                        id="hargaJual"
                        name="hargaJual"
                        placeholder="Harga Jual"
                        type="text"
                    />
                    <Label for="hargaJual">
                        Harga Jual
                    </Label>
                    </FormGroup>
                    {' '}
                    <FormGroup floating>
                    <Input
                        id="hargaBeli"
                        name="hargaBeli"
                        placeholder="Harga Beli"
                        type="text"
                    />
                    <Label for="hargaBeli">
                        Harga Beli
                    </Label>
                    </FormGroup>
                    {' '}
                    <FormGroup floating>
                    <Input 
                        id="deskripsi"
                        name="deskripsi"
                        placeholder="Deskripsi"
                        type="textarea"
                    />
                    <Label for="deskripsi">
                        Deskripsi
                    </Label>
                    </FormGroup>
                    {' '}
                    <Button className="bg-primary">
                    Submit
                    </Button>
                </div>
                </Form>
            </Container>
        </div>
    )
  };

export default UbahProduk