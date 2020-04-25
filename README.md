# <span style = "color:green;  text-align: center;display: block; text-transform: uppercase;">How to use git</span>
<br/>  

## *Nhật Huy* 
  
![Imgur](https://i.imgur.com/j5awM87.png)    

### 1. Thiết lập chứng thực cá nhân
```
$ git config --global user.name "Nhat Huy" 
```  
``` 
$ git config --global user.email "nhathuynguyenho@gmail.com"
```

### 2. "git init":
* Lệnh khởi tạo sử dụng GIT cho thư mục hiện tại.  
	* ```$ git init```  
### 3. "git status":   

![Imgur](https://i.imgur.com/MXClLDR.png)

* Dùng để xem status của git project.  
 	```$ git status```  
	* Phần tử màu đỏ thì ở working Drectory (untracked) (working Drectory là thư mục local ta đang làm việc).
![Imgur](https://i.imgur.com/PM20gaP.png)  
	* Phần tử màu xanh thì ở Staging Area (tracked).
![Imgur](https://i.imgur.com/DqUV6pK.png)  

	![Imgur](https://i.imgur.com/TRwQoLi.png)
	* **Tracked** – Là tập tin đã được đánh dấu theo dõi trong Git để bạn làm việc với nó. Và trạng thái Tracked nó sẽ có thêm các trạng thái phụ khác là Unmodified (chưa chỉnh sửa gì), Modified (đã chỉnh sửa) và Staged (đã sẵn sàng để commit).
	* **Untracked** – Là tập tin còn lại mà bạn sẽ không muốn làm việc với nó trong Git
	![Imgur](https://i.imgur.com/2LgYo4V.png)

* **Staging Area** là gì?
 * **Staging Area** nghĩa là khu vực sẽ lưu trữ những thay đổi của bạn trên tập tin để nó có thể được commit, vì muốn commit tập tin nào thì tập tin đó phải nằm trong Staging Area. Một tập tin khi nằm trong Staging Area sẽ có trạng thái là Stagged (xem thêm ở dưới).  
![Imgur](https://i.imgur.com/CIRSnlT.png)  
	Và để đưa một tập tin vào Staging Area thì bạn sẽ cần phải sử dụng lệnh git add tên_file mà mình đã có ví dụ phía dưới.
### 4. Tạo local repository bằng "git add":
* git add README.md  
	* Thêm file README.md vào cho GIT quản lý (Staging Area).  
	```$ git add README.md```    
* git add *  
	* Thêm tất cả các file chưa add vào GIT quản lý.   
	```$ git add *``` hoặc ```$ git add .```  
	![Imgur](https://i.imgur.com/RT4OaTL.png)  

### 5. "git commit":
* **commit:** nghĩa là một hành động để Git lưu lại một bản chụp (snapshot) của các sự thay đổi trong thư mục làm việc, và các tập tin và thư mục được thay đổi đã phải nằm trong Staging Area. Mỗi lần commit nó sẽ được lưu lại lịch sử chỉnh sửa của mã nguồn kèm theo tên và địa chỉ email của người commit. Ngoài ra trong Git bạn cũng có thể khôi phục lại tập tin trong lịch sử commit của nó để chia cho một phân nhánh (branch) khác, đây là mấu chốt của việc bạn sẽ dễ dàng khôi phục lại các thay đổi trước đó mà mình có giới thiệu qua ở phần giới thiệu serie này.  

* **"git commit -m":** Lệnh commit sẽ có cấu trúc git commit -m "Lời nhắn", lúc này tất cả các tập đang trong trạng thái tracked (file mới) hoặc một tập tin đã được tracked nhưng có một sự thay đổi mới thì sẽ được commit.   
	* ```$ git commit -m 'Add_all_file'```      

	![Imgur](https://i.imgur.com/hzKO9X6.png)    

	![Imgur](https://i.imgur.com/eYFDIOp.png)  

* Nếu có file nào được thêm hay thay đổi ta update bằng cách add rồi commit lại (kiểm tra bằng git status).

### 6. Log  
* Để xem lịch sử của các lần commit trước đó, bạn sử dụng lệnh "git log".  
	* ```$ git log```  

 	![Imgur](https://i.imgur.com/lOqFbuO.png)  
* Dùng "git log -p" để xem chi tiết.  
	* ```$ git log -p```  

	![Imgur](https://i.imgur.com/s61mJ0y.png)

* Dùng "git show" với id của lần commit để xem chi tiết commit đó.  
	* ```$ git show d72845cbd2f5856a7815385b03648356affb162d```

	![Imgur](https://i.imgur.com/6CwKIvX.png)  
* Dùng "git diff" để xem những file đã được thay đổi khác gì với lúc chưa thay đổi (Modified (đã chỉnh sửa) + là đã thêm mới, - là bỏ bớt đi).
	* ```$ git diff```

	![Imgur](https://i.imgur.com/ePcbXRY.png)  

	![Imgur](https://i.imgur.com/7oclN4n.png)

	![Imgur](https://i.imgur.com/PvMV6U2.png)

* Dùng lệnh "gitk" hoặc các extension hỗ trợ của vs code nếu muốn xem bằng GUI.  
	* ```$ gitk```

	![Imgur](https://i.imgur.com/vVQ36li.png)  
	* Dùng extension GitLens của VScode.  
	
	![Imgur](https://i.imgur.com/03GTCgr.png)

### 7. BRANCH – Kỹ thuật phân nhánh
![Imgur](https://i.imgur.com/6a1IFPH.png)

![Imgur](https://i.imgur.com/ZnAidkS.png)  

![Imgur](https://i.imgur.com/XadmsqW.png)  

* vd: Khi ta làm 1 project có nhiều trang nhiều chức năng, thường mỗi khi viết 1 chức năng nào đó ta sẽ làm ra 1 branch mới để nó không bị ảnh hưởng đến nhánh chính master, cho đến khi ta code hoàn thành xong chức năng không có lỗi và hài lòng với thay đổi, những commit trên các nhánh khác thì lúc đó ta mới tiến hành ghép vào nhánh master...đảm bảo cho nhánh master không bị lỗi gì. cũng tương đi làm leader cũng chia project ra những branch khác nhau tùy với chức năng mà thành viên viết rồi quản lý các commit của các thành viên đến khi nào không lỗi lầm thì mới ghép vào nhánh master... giúp quản lý dự án tốt hơn.

* Cách tạo 1 branch: **"git branch tên_branch"**
	* ```$ git branch feature/dog-class```  
 
	![Imgur](https://i.imgur.com/0A8nLoN.png)  

	kiểm tra và thấy có 1 branch mới được tạo nhưng ta vẫn ở branch cũ master.
	![Imgur](https://i.imgur.com/icc2Kak.png)
* Để chuyển brank, truy cập kiểm tra mã nguồn trong branch đó để làm việc: **"git checkout tên_branch"**
	![Imgur](https://i.imgur.com/zYuQ65R.png)
	* ngoài ra ta có thể làm tắt vừa tạo vừa chuyển qua branch mới:  
	```$ git checkout -b feature/dog-class```   
* Ta thấy khi về branch branch feature/dog-class lúc này ta comment module export của Dog.js lại. nhưng khi quay về branch master thì mọi thứ còn nguyên không thay đổi => code sẽ thay đổi tùy theo brank mà ta code cho tới khi ta hài lòng thì mới ghép branch phụ vào master.  

	![Imgur](https://i.imgur.com/JfF7eTt.png)

	![Imgur](https://i.imgur.com/1JMOzcq.png)

* Khi ta đã code thành công, đã hài lòng ở các branch phụ, ta sẽ tiến hành gộp (merge) nó vào branch chính (master)(kéo những thay đổi từ 1 branch khác vào 1 branch nào đấy không nhất thiết phải là master).
	* merge theo trình tự đang ở branch A thì merge branch B vào A (vd ta muốn merge branch feature/dog-class vào branch chính master để đồng bộ thì ta kiểm tra xem ta đã đứng ở branch master chưa nếu chưa thì checkout về master sau đó dùng lệnh merge branch feature/dog-class bây giờ dữ liệu code đã được đồng bộ từ feature/dog-class vào master và code 2 bên là giống nhau).  
	```$ git merge feature/dog-class```

		![Imgur](https://i.imgur.com/lNnPqRV.png)

### 8. Git Reset

* **Bỏ tập tin ra khỏi Staging Area** (chuyển 1 file đã git add rồi về trạng thái trước đó):
	* Nếu bạn đã đưa một tập tin nào đó vào Staging Area nhưng bây giờ bạn muốn loại bỏ nó ra khỏi đây để không phải bị commit theo thì có thể sử dụng lệnh **"git reset HEAD tên_file"**.   
	![Imgur](https://i.imgur.com/UmnOdos.png)  
* **Undo commit**
	* **```git reset --soft commit_Id```** nó sẽ quay lại commit có id mà ta chỉ định và nó sẽ mở, hủy đi tất cả các commit mà bạn đã commit sau cái commit mà bạn đã chỉ định và các file sẽ trở về staging Area (đã được add nhưng chưa commit lên lan9). VD: Ta đã commit với nhãn là lan9 giờ ta sẽ trở về lúc commit mà nhãn là lan8 bằng cách dùng lệnh trên và đánh id của commit lan8 vào nó sẽ trở về commit lan8 và hủy commit lan9.    
	![Imgur](https://i.imgur.com/w0nUQGp.png)   

		![Imgur](https://i.imgur.com/0IzX9h6.png)

		![Imgur](https://i.imgur.com/jl1dbTu.png)
		
		![Imgur](https://i.imgur.com/4AMkChn.png)
	
	* **```git reset --mixed commit_Id```** cũng tương tự như reset --soft trên nhưng chỉ khác là các file được add trong lan8 de lên lan9 không còn ở trong staging Area nữa mà trở về working drectory luôn (nghĩa là các file sẽ trở về luôn trạng thái ở lần 8 vì nó không tồn tại trong working drectory luôn nên chắc chắn mọi thay đổi sẽ quay về).
	![Imgur](https://i.imgur.com/FaBFzDu.png)
	
	* **```git reset --hard commit_Id```** tương tự nhưng trạng thái của commit sẽ biến mất sạch sẽ và không còn file nào trong staging area hoặc working directory luôn.
	![Imgur](https://i.imgur.com/pjXPpPB.png)	
	
### 9. Git revert
* nghĩa là trả lại revert lại trạng thái lúc trước (vd: viết ra 1 dòng mà thấy sai không ok thì ta có thể revert lại, quay lại trạng thái trước khi có dòng đấy, xóa nó đi chẳng hạn.). Dùng trong trường hợp 1 commit cách đây vài commit mà muốn bỏ nó đi (bỏ đi những thay đổi mà lần commit đó đã commit đã thay đổi) => nó rất nguy hiểm nên tránh dùng. (dùng reset thì tất cả commit sau nó bị mất đi. Trong trường hợp không muốn nó bị mất đi mà chỉ muốn reset lại 1 commit trong số đó thì ta dùng revert). Nó sẽ tạo ra 1 commit mới đảo ngược lại commit mình muốn revert (dùng chính id commit mà ta muốn revert về).  
	* **```git revert commit_Id```**  

	![Imgur](https://i.imgur.com/2kMDivn.png)

	![Imgur](https://i.imgur.com/2tRhD3m.png)

	![Imgur](https://i.imgur.com/GiGqsaN.png)  

	* Dùng :wq như vi để lưu ta kiểm tra lại và thu được một commit revert từ commit hồi nãy.
	
	![Imgur](https://i.imgur.com/DLWOQLn.png)

### 10. gitignore
* .gitignore là 1 file nằm trong project của mình. mục đích là để ta có thể bỏ qua 1 số file mà ta không muốn commit, nó sẽ không hiển thị ra mỗi khi ta gõ git status (ví dụ khi dùng node packet thì sẽ có file node module và file này khá nặng và chỉ là source các module, ta khai báo file này vào .gitignore thì nó sẽ không commit theo, khi đẩy code lên remote server thì nó sẽ không tồn tại trên đó mà ta chỉ commit file package.json file này sẽ lưu toàn bộ cấu hình của node module. lúc cần thì kéo về và gõ lệnh npm install là các package lại được cài lại và file node modules lại tồn tại.
	* khởi tạo project node và download chalk module để demo:  
	![Imgur](https://i.imgur.com/0uC47NN.png)
	
		![Imgur](https://i.imgur.com/jISm2ZS.png)
		
		![Imgur](https://i.imgur.com/TOrClSb.png)  

		![Imgur](https://i.imgur.com/7wpklAi.png)

	* Dùng git status ta có thể thấy node_modules đang hiện trong working directory.  
	![Imgur](https://i.imgur.com/qqTXlyB.png)  
	* Tạo file .gitignore và khai báo node_modules.
	![Imgur](https://i.imgur.com/GnGuV7j.png)  

		![Imgur](https://i.imgur.com/31TK0m3.png)

		![Imgur](https://i.imgur.com/QoXjZcT.png)  
	* Lúc này ta gõ lại git status lại và thấy node_modules đã biến mất khỏi local repository
	![Imgur](https://i.imgur.com/7bdycCF.png)  

### 11. Github
![Imgur](https://i.imgur.com/5Dd7ii6.png)   

* Đa phần vẫn nhầm lẫn Git vs GitHub là một bởi vì cứ nói đến Git là nghĩ tới GitHub. Đó là một sự hiểu lầm vì Git  là tên gọi của một mô hình hệ thống, các máy tính có thể clone lại mã nguồn từ một repository , còn GitHub là tên của một công ty cũng cấp dịch vụ máy chủ repository công cộng, mỗi người có thể truy cập vào website trang chủ để tạo tài khoản trên đó và tạo ra kho chứa source của riêng mình khi làm việc.
	* [https://github.com/](https://github.com/ "Link to Githup")
* Tạo repository trên Github và làm việc.
	![Imgur](https://i.imgur.com/GYsotUO.png)

	![Imgur](https://i.imgur.com/Jr71f0z.png)
* Demo cách đưa code lên Githup cơ bản.
	* Copy link dưới đây trong repository mới tạo.
	![Imgur](https://i.imgur.com/ueAcQUY.png)  
	* **Thêm remote repository**: Trường hợp bạn cần thêm một cái remote để lấy dữ liệu khi cần thì có thể sử dụng lệnh ```$ git remote add origin linkCopyRespository```   
		VD: ```$ git remote add origin https://github.com/byenet/hoc-git.git``` 
	![Imgur](https://i.imgur.com/ltjzjLh.png)    
	Cái origin trong đoạn đó chính là tên remote repository. Mặc định khi clone một repository thì nó tự đặt tên là origin.  

	* **Đổi tên remote**: Nếu bạn không thích tên origin thì có thể đổi tên nó lại nó bằng tên khác cho dễ quản lý nếu như bạn có nhiều remote trong một dự án với lệnh ```git remote rename ten_cu ten_moi```. Ví dụ mình cần đổi từ origin sang thach thì sẽ đổi như sau: 
	![Imgur](https://i.imgur.com/x0BOr1x.png)
	* **git push -u** (nếu chưa sync với repository lần nào thì dùng lệnh này, còn đã sync trước đây rồi thì chỉ cẩn dùng lệnh git push) để đẩy các tập tin đã được commit lên Github. Lưu ý rằng bạn sẽ cần nhập tài khoản và mật khẩu Github.
	![Imgur](https://i.imgur.com/v7xpv02.png)  
	trên github đã được sync.  
	![Imgur](https://i.imgur.com/H96m5vP.png)  
	* Nếu đã sync với repository trước đây thì ta dùng ```git push``` để đẩy code lên.  
	![Imgur](https://i.imgur.com/eUg3QC6.png)