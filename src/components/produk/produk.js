import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
//import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './css/produk.css'
import { Container, Table } from 'reactstrap';

const Produk = () => {
    const navigate = useNavigate();
    return (
        <div className="produkcontainer">
            <Container>
                <button className="tambahproduk bg-primary text-white"  onClick={() => navigate('/addproduk')}>Tambah Produk</button>
                <Table hover>
                    <thead>
                        <tr>
                        <th>
                            No
                        </th>
                        <th>
                            Foto Produk
                        </th>
                        <th>
                            Nama Produk
                        </th>
                        <th>
                            Harga Jual
                        </th>
                        <th>
                            Harga Beli
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Hapus
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                1
                            </th>
                            <td>
                                Mark
                            </td>
                            <td>
                                Otto
                            </td>
                            <td>
                                @mdo
                            </td>
                            <td>
                                @mdo
                            </td>
                            <td>
                                Edit
                            </td>
                            <td>
                                Hapus
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
  };

export default Produk