# <span style = "color:green;  text-align: center;display: block; text-transform: uppercase;">How to use git</span>
<br/>  

## *Nhật Huy* 
  
![Imgur](https://i.imgur.com/j5awM87.png)    

### 1. Thiết lập chứng thực cá nhân
```
$ git config --global user.name "byenet" 
```  
``` 
$ git config --global user.email "nhathuynguyenho@gmail.com"
```

### 2. "git init":
* Lệnh khởi tạo sử dụng GIT repository cho thư mục hiện tại.  
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

* vd: Khi ta làm 1 project có nhiều trang nhiều chức năng, thường mỗi khi viết 1 chức năng nào đó ta sẽ làm ra 1 branch mới để nó không bị ảnh hưởng đến nhánh chính master, cho đến khi ta code hoàn thành xong chức năng không có lỗi và hài lòng với thay đổi những commit trên các nhánh khác thì lúc đó ta mới tiến hành ghép vào nhánh master...đảm bảo cho nhánh master không bị lỗi gì.  

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

* **Xóa branch**:
	`$ git branch -d <branchname>`

	![Imgur](https://i.imgur.com/ygDZA3B.png)  

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
	* [Trang chủ Github](https://github.com/ "Link to Githup")
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
* **Xóa remote repository:**  
`$ git remote rm remote_name`  

	![Imgur](https://i.imgur.com/plPWHyB.png)
	
### 12. Git credential config  
* Cài đặt Git credential helper. Một số Git clound hỗ trợ kết nối đến bằng HTTP, mỗi khi tương tác với các Git clound này cần sử dụng username/password. Bạn có thể lưu trữ lại chứng nhận thay cho việc phải cung cấp username/password. Git credential Manager sẽ quản lý các chứng nhận đó. 
	* `git config --global credential.helper "cache --timeout=18000"`  
		* cache --timeout=18000 là dữ liệu được lưu trong cache ram với thời gian là 18000 ms (5 tiếng) nghĩa là sau 5 tiếng mới phải đánh lại mật khẩu một lần. 
		  
	![Imgur](https://i.imgur.com/ZcGxhiX.png)
	
	![Imgur](https://i.imgur.com/qOQBh7n.png)  

### 13. Git clone & pull  
![Imgur](https://i.imgur.com/EB876Nv.png)   
  
* **git clone**  
	* Lệnh này sẽ sao chép toàn bộ dữ liệu trên repository và sao chép luôn các thiết lập về repository, tức là nó sẽ tự động tạo một master branch trên máy tính của bạn. Lệnh này chỉ nên sử dụng khi bạn cần tạo mới một Git mới trên máy tính với toàn bộ dữ liệu và thiết lập của một remote repository. (khi repository trống và ta clone repository của người khác về dùng, nó sẽ clone luôn cả những lần commit của repository đó, clone toàn bộ về...khi làm việc teamwork đây là cách phổ biến, cho lần đầu đưa dự án vào quản lý hoặc khi bạn đi làm và join và dự án các bạn cũng sẽ thực hiện việc clone project đã có của team trên server về máy tính của các bạn.).
	* Copy link remote repository để tiến hành clone.  
	![Imgur](https://i.imgur.com/t1ZWicw.png)  
	* Tại repository muốn clone về dùng lệnh **git clone** để tiến hành clone remote repository về repository của mình.
	`git clone link_remoteRepository`  

		![Imgur](https://i.imgur.com/VUMudvL.png)  
		
		![Imgur](https://i.imgur.com/CxOHpUB.png)  
* **git pull**  
	* Nếu bạn đang làm việc chung với cả một team, bạn sẽ nhận thấy, khi repo được cập nhật lên GitHub, thì các thay đổi sẽ không còn local nữa. Nếu đúng như vậy, bạn có thể sử dụng **`git pull remote_origin branch_name`** để pull các thay đổi gần nhất từ remote branch đó.  
		* Ở bên repo chính ta tiến hành commit và push cập nhật lại remote repo.  
		![Imgur](https://i.imgur.com/wHVDIZv.png)
		* Ở repo local mà ta clone ra ta tiến hành git pull lấy cập nhật mới nhất từ repo remote vừa được update kia về.
		![Imgur](https://i.imgur.com/7KKTkuh.png)  

### 14. Pull request (teamwork)  
![Imgur](https://i.imgur.com/im0oOF5.png) 

* Khi làm teamwork thì leader sẽ chia project ra từng phần, ra nhiều branch trên github phụ thuộc vào chức năng bạn làm có thể là login, thanh toán hay giỏ hàng,...  sau đó bạn sẽ lên git hub lấy branch của mình về làm, làm xong bạn thấy không có lỗi thì tiến hành commit và push brach đó lên repo remote của team, tạo ra 1 pull request để leader tiến hành test code. Leader nhận được pull request thì tiến hành test và review code, review code online trên github, nếu ổn thì leader fetch branch về local để test offline nếu tất cả code, chức năng chạy tốt thì leader sẽ approve pull request của bạn. Sau đó leader tiến hành merge branch bạn code vào branch master(branch chính).  

#### a) Tạo branch, xử lý ở local repo

* Có nhiều cách leader có thể tạo các branch xong bạn clone về làm rồi push lên lại. Ở đây thì bên nhân viên sẽ tạo 1 branch sau đó push lên sau ( việc này tương tự như đã làm ở local repo).  
`$ git checkout -b <feature_branch>`  
 
	![Imgur](https://i.imgur.com/f7jf3BL.png)  
* Code feature theo yêu cầu đến khi nào hoàn thành không còn bug thì push lên remote repo.   
	![Imgur](https://i.imgur.com/ujuxoIy.png)  

	![Imgur](https://i.imgur.com/1rBXibA.png)
	
#### b) push lên remote repo (github)
* **Pushing**
	* Khi push từ local repository lên remote repository, cần làm sao cho nhánh đã push sẽ được merge fast-forward. Nếu phát sinh xung đột, push sẽ bị từ chối.  
	* Trường hợp muốn chia sẻ nhánh đã tạo tại local repository, cần phải push rõ ràng. Cho nên, miễn là không push thì sẽ không gây ảnh hưởng cho remote repository, và có thể tự do tạo branch của chính mình. 
	
		![Imgur](https://i.imgur.com/OcEQF4L.png)  

		![Imgur](https://i.imgur.com/udVOuSh.png) 

* Dùng lệnh **`git push remote_origin branch_name`** để push code sau khi commit xong lên github.
	* github khi ta chưa push branch lên (chỉ có 1 branch master).  
	![Imgur](https://i.imgur.com/4Zqvo4y.png)  
	* push branch lên github.  
	![Imgur](https://i.imgur.com/83dmzc4.png)  
	* github khi ta push branch lên (ngoài branch master còn có thêm branch feature/horse-class.  
	![Imgur](https://i.imgur.com/EzGRFwC.png)  

#### c) Creat a pull request on github and Review code, approve the pull request and merge code online
* Mình sẽ tạo 1 yêu cầu để được pull code cho leader biết mình đã commit. sau khi leader nhận được sẽ tiến hành review code này xem đủ yêu cầu được pull chưa. Ta tạo pull request bắng giao diện như các hình dưới đây. 
   
* **Nhân viên tạo pull request.**  

	![Imgur](https://i.imgur.com/dmWlESI.png)   

	![Imgur](https://i.imgur.com/kMoPmZh.png)   

* **Leader review code online.**    

	![Imgur](https://i.imgur.com/gvjuM8H.png)  

	![Imgur](https://i.imgur.com/obelDIj.png)  

	![Imgur](https://i.imgur.com/5fmlRqL.png)  

	![Imgur](https://i.imgur.com/LgWn5Tz.png)  

	![Imgur](https://i.imgur.com/epyENjB.png)  

	![Imgur](https://i.imgur.com/4oOg7BL.png)  

	![Imgur](https://i.imgur.com/nRTv5WZ.png)  

	![Imgur](https://i.imgur.com/aAgjNUU.png)  

	![Imgur](https://i.imgur.com/vsaa0jR.png)  

	![Imgur](https://i.imgur.com/dt0gyQj.png)   

* **Nhân viên xem nhận xét của leader và sửa code sau đó commit và push code lên cho leader xem lại**
	
	![Imgur](https://i.imgur.com/TYOJnJM.png)  
	
	![Imgur](https://i.imgur.com/E8wVMcu.png)

* **Leader review lại và nếu ổn thì approve the pull request và merge code vào master**  

	![Imgur](https://i.imgur.com/4GmcrOj.png)  

	![Imgur](https://i.imgur.com/qFFY1ax.png)  
	
	![Imgur](https://i.imgur.com/8dp6YKM.png)  

	![Imgur](https://i.imgur.com/tJLzYNz.png)  

	![Imgur](https://i.imgur.com/vyDAVPz.png)  

	![Imgur](https://i.imgur.com/2dIK9L6.png)  

	![Imgur](https://i.imgur.com/SgH7CSi.png)  

#### d) fetch branch into local to test code offline (optional)
* Review code online thì leader chỉ xem được code có sạch không, xem sơ về logic code, cách code,... để mà xem và test được code xem nó có chạy đúng không, chạy ok chưa rồi mới tiến hành merge code và approve the pull request. Mục này sẽ demo lại quá trình push code, pull request của nhân viên, leader sẽ xem và fetch code về local test.  

* **Nhân viên code và pull request như đã làm.**  

	![Imgur](https://i.imgur.com/tXZ3cdl.png)  
	
	![Imgur](https://i.imgur.com/YWcPyOK.png)  

	![Imgur](https://i.imgur.com/m5PdAbR.png)  

	![Imgur](https://i.imgur.com/RZzsneb.png)  

	![Imgur](https://i.imgur.com/IEb4P7g.png)  

	![Imgur](https://i.imgur.com/WVGd7uN.png)

	![Imgur](https://i.imgur.com/GES0diA.png)  

	![Imgur](https://i.imgur.com/X284qnW.png)  
 
* **Leader review code online and fetch branch into local to test code offline**   
	* **Fetching**  
		* Khi thực hiện pull, merge nội dung của remote repository sẽ tự động được tiến hành. Tuy nhiên, cũng có trường hợp chỉ đơn giản muốn kiểm tra nội dung của remote repository mà không muốn merge. Những lúc như vậy hãy sử dụng fetch.
		* Khi thực hiện fetch, chỉ có thể tiến hành lấy lịch sử mới nhất của remote repository. Commit đã lấy, sẽ được đưa vào như nhánh không tên. Branch này có thể checkout bằng tên là FETCH_HEAD.
		* Ví dụ, với mỗi origin của local repository và remote repository, khi tiến hành fetch với trạng thái có commit tiến triển từ B, thì sẽ thành lịch sử giống như sơ đồ bên dưới.  
![Imgur](https://i.imgur.com/NsXhBAt.png)  
		* Từ trạng thái này, trường hợp tích hợp nội dung của remote repository vào master của local repository thì sẽ merge FETCH_HEAD hoặc pull lại.  
![Imgur](https://i.imgur.com/rVLuvdr.png)
	* **Leader review code online**
	![Imgur](https://i.imgur.com/QNYXQFV.png)  
	* **Leader fetch branch into local to test code offline**  
	![Imgur](https://i.imgur.com/fKcG9Mc.png)  
* Sau khi leader test code thành công thì sẽ lại tiến đến những bước cuối như phần review code online (nhận xét sau đó merge pull,... mình không nhắc lại).  
### 15. Resolve Conflicts   
![Imgur](https://i.imgur.com/tXoHNMu.png)  

* Khi làm việc nhóm, pull, push, merge code, sẽ có trường hợp hai người cùng chỉnh sửa một file, một dòng code, khi đồng bộ sẽ xảy ra xung đột (conflict).
* Khi bạn làm việc với nhiều branch, nhảy qua nhảy về, commit, sửa chung một dòng code, cũng sẽ xảy ra conflict.
* Trên đây là hai tình huống thường gặp về git conflict.  
#### a) Resolve conflict using git rebase  
![Imgur](https://i.imgur.com/dCBW511.png)  
 
* Git Rebase là một chức năng được dùng khi gắn nhánh đã hoàn thành công việc vào nhánh gốc . Về mặt nội dung thì là việc điều chỉnh nhánh công việc gắn vào với nhánh gốc nên các commit sẽ được đăng kí theo thứ tự gắn vào . Chính vì thế sẽ có đặc trưng là dễ nhìn hơn sau khi xác nhận commit.  
* khi sử dụng git rebase để hợp nhất 2 nhánh lại thì bạn sẽ có một lịch sử đẹp hơn, thằng hàng hơn và dễ nhìn hơn git merge. Nhưng rebasing đúng như cái nghĩa đen của nó là phá hủy, nó di chuyển toàn bộ nhánh mà bạn muốn hợp nhất lên đầu nhánh chính và viết lại lịch sử commit của nhánh đó.
* Hãy nhớ rằng bạn chỉ nên dùng git rebase trong nhánh của riêng bạn và đừng dùng nó với bất cứ thứ dùng đã được đẩy lên remote nếu không muốn bị mọi người trong team ghét. Và nếu bạn chưa hiểu nhiều về rebasing thì tốt nhất bạn nên sử dụng merging vì nó an toàn hơn.  

* Ở đây ta demo 2 nhân viên A,B code 2 branch khác nhau với 2 feature khác nhau là feature/horse-run và feature/horse-jump. Cả hai cùng thay đổi 1 file Horse.js rồi commit và gửi pull request lên branch master của remote repo. Vậy khi master của remote repo được merge với feature/horse-jumb thì master của remote repo đã bị thay đổi, lúc merge với feature/horse-run thì sẽ có conflict xảy ra.  

	![Imgur](https://i.imgur.com/MqS0PCj.png)  

* Nhân viên A tạo branch feature/horse-run và code thêm method run cho file Horse.js. sau đó gửi pull request lên remote repo.  

	![Imgur](https://i.imgur.com/uAGk0Ls.png)  

	![Imgur](https://i.imgur.com/FrkyRsp.png)  

	![Imgur](https://i.imgur.com/EMmTTAD.png)  

	![Imgur](https://i.imgur.com/Mul2cVP.png)  
* Nhân viên B tạo branch feature/horse-jump và code thêm method jump cho file Horse.js. sau đó cũng gửi pull request lên remote repo.
	
	![Imgur](https://i.imgur.com/vDqV8DK.png)  

	![Imgur](https://i.imgur.com/pOvuNp0.png)  

	![Imgur](https://i.imgur.com/mjzH87L.png)  

	![Imgur](https://i.imgur.com/cA2FAtw.png)  

* Ta có được 2 pull request từ 2 branch feature/horse-run và feature/horse-jump.
	
	![Imgur](https://i.imgur.com/4Owtkum.png)    

* Ta tiến hành merge feature/jump vào master của remote repo.

	![Imgur](https://i.imgur.com/9h8taA3.png)  

* Lúc này branch master của remote repo đã thay đổi vì đã merge feature/horse-jump vào. cụ thể là file Horse.js đã thay đổi. Bây giờ ta tiếp tục merge branch feature/horse-run vào thì sẽ thấy gây ra conflict.   
	![Imgur](https://i.imgur.com/MqS0PCj.png)  

	![Imgur](https://i.imgur.com/gkDTqaz.png)  

	![Imgur](https://i.imgur.com/hdwTVHz.png)
	
* Để resolve conflict này ta sẽ về repo của branch feature/horse-run (nơi cần giải quyết xung đột để được merge vào master của remote repo). từ đây ta chuyển về branch master của repo này rồi tiến hành pull tới master của remote repo để đồng bộ. 

	![Imgur](https://i.imgur.com/pueJSkw.png)  

* Sau đó chuyển về branch feature/horse-run và tiến hành rebase master xem thử file nào bị conflict và conflict chỗ nào để tiến hành chỉnh sửa loại bỏ conflict.  

	![Imgur](https://i.imgur.com/xH61FvJ.png)  

* Ta thấy vấn đề ở file Horse.js ta tiến hành xem xét và chỉnh sửa file theo ý muốn để tiến hành rebase.
	
	![Imgur](https://i.imgur.com/0Us98I7.png)  

	![Imgur](https://i.imgur.com/0rz1TGc.png)  

* Sau khi sửa xong ta tiến hành commit thay đổi và git rebase --continue  
	
	![Imgur](https://i.imgur.com/ErdJKtY.png)  

* Sau khi rebase thành công ta tiến hành gửi pull request feature/horse-run lên remote repo với hậu tố -f (vì lịch sử thay đổi) và ta thấy merge đã thành công.

	![Imgur](https://i.imgur.com/GxQrClo.png)  
	
	![Imgur](https://i.imgur.com/qcEJTFx.png)  

	![Imgur](https://i.imgur.com/MvkRG3X.png)  

	![Imgur](https://i.imgur.com/A0rfo86.png)  

	![Imgur](https://i.imgur.com/7A7w8TL.png)

	![Imgur](https://i.imgur.com/VHjLTqL.png)
	



	