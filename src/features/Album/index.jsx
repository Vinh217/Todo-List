import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = { };

function AlbumFeature(props) {
    const albumList = [
        {
            id: '1',
            name: 'Những sáng tác hay nhất của Tiên Tiên',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/covers/d/8/d868c6e3d29830bcd2f81a5012f81937_1500882568.jpg'
        },
        {
            id: '2',
            name: 'Combo Hit',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/8/8/0/588050f159e23ff6af76b299bd0b38c1.jpg'
        },
        {
            id: '3',
            name: 'Ruột truyền thống,vỏ hiện đại',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/9/7/8/e9789f3aafc3a52f077c12cb3453d1d7.jpg'
        },

    ]
    return (
        <div>
            <h2>Zing mp3</h2>
            <AlbumList albumList = {albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;