b1: `npm install` or `npm install --force`
b2: `npm start`

1. Tham khảo cách viết trong folder samples nhaa
2. Link docs react-bootstrap
    https://react-bootstrap.github.io/

3. Link search Icon
    https://fontawesome.com/v5/search
    vd <i className="fas fa-heart"></i>

4. Note
    - Mỗi component có 1 file index.js để viết code chính, file styles.scss để viết css. 
    
    - Nếu phần tử có css đơn giản thì có thể viết inline luôn cũng đượccc

    - Đọc thêm viết css ngay trong className ở đây nhớ:     
        https://getbootstrap.com/docs/4.4/utilities/borders/
    Cnay sẽ thêm được 1 số thuộc tính css 1 cách nhanh chóng mà ko cần viết ra css như bình thường. Còn cái gì ở đây không có thì viết ra file css

    (nhưng nếu k thích thì viết thuần css cũng được, nhưng mất thời gian hơn)

    - Khi viết file js thì cần có 1 class ở div ngoài cùng (lấy luôn tên component đó cho dễ cũng được) 
        -> file css sẽ để class đó bao ngoài tất cả, để ko ảnh hưởng đến các component khác 
    VD: 
    index.js
        return (
            <div className="login-screen p-5">
                <!-- js code here -->
            </div>
        )

    styles.scss
        .login-screen {
            <!-- css code here -->
            .form-group {
                <!-- css code here -->
            }
            .form-title {

            }
        }

5. Một số component t sẽ custom sẵn ở folder general, cái nào dùng đc thì lấy ra dùng luôn để đỡ phải viết css lại: button, modal,... 