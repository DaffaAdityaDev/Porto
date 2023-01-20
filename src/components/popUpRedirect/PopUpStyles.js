import styled from 'styled-components'


const PopUpContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    .popUp {
        width: 500px;
        height: 500px;
        background: #fff;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        text-align: center;

        .close {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 30px;
            cursor: pointer;
        }

        h2 {
            font-size: 30px;
            margin-bottom: 20px;
        }

        p {
            font-size: 20px;
            margin-bottom: 20px;
        }

        .btn {
            padding: 10px 20px;
            background: #000;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 768px) {
        .popUp {
            width: 300px;
            height: 300px;
        }
    }

    @media screen and (max-width: 480px) {
        .popUp {
            width: 200px;
            height: 200px;
        }
    }

`