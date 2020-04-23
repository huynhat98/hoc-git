## Người thực hiện: Nguyễn Hồ Nhật Huy  
## 1. lớp network
* Nhiệm vụ của lớp mạng là đảm bảo chuyển chính xác số liệu giữa các thiết bị cuối trong mạng. Để làm được việc đó, phải có chiến lược đánh địa chỉ thống nhất trong toàn mạng. Mỗi thiết bị cuối và thiết bị mạng có một địa chỉ mạng xác định. Số liệu cần trao đổi giữa các thiết bị cuối được tổ chức thành các gói (Packet) có độ dài thay đổi và được gán đầy đủ địa chỉ nguồn (source address) và địa chỉ đích (destination address).  
*  Lớp mạng đảm bảo việc tìm đường tối ưu cho các gói dữ liệu bằng các giao thức chọn đường dựa trên các thiết bị chọn đường (Router). Ngoài ra, lớp mạng có chức năng điều khiển lưu lượng số liệu trong mạng để tránh xảy ra tắc nghẽn bằng cách chọn các chiến lược tìm đường khác nhau để quyết định việc chuyển tiếp các gói số liệu.
## 2. Internet protocol
* Địa chỉ IP là địa chỉ logic được sử dụng trong giao thức IP của lớp Internet
thuộc mô hình TCP/IP (tương ứng với lớp thứ 3 – lớp network của mô hình OSI).
Mục này trình bày các điểm chính cần ghi nhớ về địa chỉ IP.
* Cấu trúc địa chỉ IP:  
 * Địa chỉ IP gồm 32 bit nhị phân, chia thành 4 cụm 8 bit (gọi là các octet). Các
octet được biểu diễn dưới dạng thập phân và được ngăn cách nhau bằng các dấu
chấm.
 *  Địa chỉ IP được chia thành hai phần: phần mạng (network) và phần host.  
 ![Imgur](https://i.imgur.com/tqg1Rd0.jpg)  
* Việc đặt địa chỉ IP phải tuân theo các quy tắc sau:
 *  Các bit phần mạng không được phép đồng thời bằng 0.  
VD: địa chỉ 0.0.0.1 với phần mạng là 0.0.0 và phần host là 1 là không hợp
lệ.
 *  Nếu các bit phần host đồng thời bằng 0, ta có một địa chỉ mạng.  
VD: địa chỉ 192.168.1.1 là một địa chỉ có thể gán cho host nhưng địa chỉ
192.168.1.0 là một địa chỉ mạng, không thể gán cho host được.
 * Nếu các bit phần host đồng thời bằng 1, ta có một địa chỉ quảng bá
(broadcast).  
VD: địa chỉ 192.168.1.255 là một địa chỉ broadcast cho mạng 192.168.1.0
## 3. Các lớp địa chỉ IP:  
### Không gian địa chỉ IP được chia làm các lớp như sau:
* __Lớp A:__ 
![Imgur](https://i.imgur.com/JJcd8O3.png)  
 * Địa chỉ lớp A sử dụng một octet đầu làm phần mạng, ba octet sau làm phần
host.
 * Bit đầu của một địa chỉ lớp A luôn được giữ là 0. Do đó, các địa chỉ mạng lớp
A gồm: 1.0.0.0 tới 127.0.0.0.  
 * Tuy nhiên, mạng 127.0.0.0 được sử dụng làm mạng loopback nên địa chỉ
mạng lớp A sử dụng được gồm 1.0.0.0 tới 126.0.0.0 (126 mạng).  
Chú ý: địa chỉ 127.0.0.1 là địa chỉ loopback trên các host. Để kiểm tra chồng giao
thức TCP/IP có được cài đặt đúng hay không, từ dấu nhắc hệ thống, ta đánh lệnh
ping 127.0.0.1, nếu kết quả ping thành công thì chồng giao thức TCP/IP đã được
cài đặt đúng đắn.  
  *  Phần host có 24 bit => mỗi mạng lớp A có (224 – 2) host.  
 Ví dụ: 10.0.0.1, 1.1.1.1, 2.3.4.5 là các địa chỉ lớp A.
* __Lớp B:__
![Imgur](https://i.imgur.com/ywQguPH.png)  
 * Địa chỉ lớp B sử dụng hai octet đầu làm phần mạng, hai octet sau làm phần
host.
 * Hai bit đầu của một địa chỉ lớp B luôn được giữ là 1 0. Do đó các địa chỉ mạng
lớp B gồm:  
128.0.0.0 -> 191.255.0.0  
Có tất cả 214 mạng trong lớp B.  
 Phần host: 16 bit  
Một mạng lớp B có 216 – 2 host.  
 Ví dụ: các địa chỉ 172.16.1.1, 158.0.2.1 là các địa chỉ lớp B. 
* __Lớp C:__
![Imgur](https://i.imgur.com/EcB1l2o.png)  
 * Địa chỉ lớp C sử dụng ba octet đầu làm phần mạng, một octet sau làm phần
host.  
 *  Ba bit đầu của một địa chỉ lớp C luôn được giữ là 1 1 0. Do đó, các địa chỉ
mạng lớp C gồm:  
192.0.0.0 -> 223.255.255.0  
Có tất cả 221 mạng trong lớp C.  
 * Phần host: 8 bit  
Một mạng lớp C có 28 – 2 = 254 host.  
 *  Ví dụ: các địa chỉ 192.168.1.1, 203.162.4.191 là các địa chỉ lớp C. 
## 4. Địa chỉ IP Private và Public: 
* Địa chỉ IP được phân thành hai loại: private và public.
 *  Private: chỉ được sử dụng trong mạng nội bộ (mạng LAN), không được
định tuyến trên môi trường Internet. Có thể được sử dụng lặp đi lặp lại
trong các mạng LAN khác nhau.
 *  Public: là địa chỉ IP sử dụng cho các gói tin đi trên môi trường Internet,
được định tuyến trên môi trường Internet, không sử dụng trong mạng LAN.  
Địa chỉ public phải là duy nhất cho mỗi host tham gia vào Internet.
 *  Dải địa chỉ private (được quy định trong RFC 1918):  
Lớp A: 10.x.x.x  
Lớp B: 172.16.x.x -> 172.31.x.x  
Lớp C: 192.168.x.x  
 *  Kỹ thuật NAT (Network Address Translation) được sử dụng để chuyển đổi giữa
IP private và IP public.
 *  Ý nghĩa của địa chỉ private: được sử dụng để bảo tồn địa chỉ IP public đang
dần cạn kiệt
* Địa chỉ quảng bá (broadcast):  
Gồm hai loại:  
 *  Direct:  
VD: 192.168.1.255
 *  Local:  
VD: 255.255.255.255
 *  Để phân biệt hai loại địa chỉ broadcast này, ta xem xét ví dụ sau:  
Xét máy có địa chỉ IP là 192.168.2.1 chẳng hạn. Khi máy này gửi broadcast đến
255.255.255.255, tất cả các máy thuộc mạng 192.168.2.0 (là mạng máy gửi gói
tin đứng trong đó) sẽ nhận được gói broadcast này, còn nếu nó gửi broadcast
đến địa chỉ 192.168.1.255 thì tất cả các máy thuộc mạng 192.168.1.0 sẽ nhận
được gói broadcast (các máy thuộc mạng 192.168.2.0 sẽ không nhận được gói
broadcast này)
## 5. Subnet mask và số prefix  
* __Subnet mask:__
 * Subnet mask là một dải 32 bit nhị phân đi kèm với một địa chỉ IP, được các host
sử dụng để xác định địa chỉ mạng của địa chỉ IP này. Để làm được điều đó, host sẽ
đem địa chỉ IP thực hiện phép tính AND từng bit một của địa chỉ với subnet mask
của nó, kết quả host sẽ thu được địa chỉ mạng tương ứng của địa chỉ IP.  
Ví dụ: Xét địa chỉ 192.168.1.1 với subnet mask tương ứng là 255.255.255.0
![Imgur](https://i.imgur.com/7CfXjqR.png)  
 * Đối với chúng ta, quy tắc gợi nhớ subnet mask rất đơn giản: phần mạng chạy
đến đâu, bit 1 của subnet mask chạy đến đó và ứng với các bit phần host, các bit
của subnet mask được thiết lập giá trị 0. Một số subnet mask chuẩn:  
Lớp A : 255.0.0.0   
  Lớp C: 255.255.255.0  
Lớp B: 255.255.0.0
* __Số prefix:__  
 * Như đã nêu ra ở trên, subnet mask được sử dụng kèm với địa chỉ IP để một host
có thể căn cứ vào đó xác dịnh được địa chỉ mạng tương ứng của địa chỉ này. Vì
vậy, khi khai báo một địa chỉ IP ta luôn phải khai báo kèm theo một subnet mask.
Tuy nhiên, subnet mask dù đã được viết dưới dạng số thập phân vẫn khá dài dòng
nên để mô tả một địa chỉ IP một cách ngắn gọn hơn, người ta dùng một đại lượng
được gọi là số prefix. Số prefix đơn giản chỉ là số bit mạng trong một địa chỉ IP,
được viết ngay sau địa chỉ IP, và được ngăn cách với địa chỉ này bằng một dấu “/”.  
Ví du: 192.168.1.1/24, 172.16.0.0/16 hay 10.0.0.0/8,.v.v… 
 
## 6. Cấu trúc IP Header Version 4
* IP Header Version 4 (tiêu đề gói tin IPv4) gồm 12 trường bắt buộc với tổng chiều dài là 20 byte (không tính các trường Options và Data). Cấu trúc của IP Header Version 4 như hình sau:
![Imgur](https://i.imgur.com/AqowQdB.png)  
 Theo cấu trúc trên:
* __Version (4 bit):__ Chỉ ra phiên bản IP đang được dùng là IPv4 (0100). Nếu trường này khác với phiên bản IP của thiết bị nhận, thiết bị nhận sẽ từ chối và loại bỏ các gói tin này. Bằng cách nhìn vào số phiên bản, Router có thể xác định phần còn lại của IP Datagram.
* __IP Header Length (IHL) (4 bit):__ Chỉ ra chiều dài của header, mỗi đơn vị là 1 word, mỗi word = 32 bit = 4 byte. Ở đây trường IP Header Length có 4 bit nên có 2^4 = 16 word = 16 x 4byte = 64 byte nên chiều dài header tối đa là 64 byte. Bình thường Hearder dài 20 byte. Đây là chiều dài của tất cả các thông tin Header.
* __Type Of Services (TOS) (8 bit):__ Chỉ ra cách thức xử lý gói dữ liệu, có độ ưu tiên hay không, độ trễ cho phép của gói dữ liệu. Trường này thường được dùng để thực hiện quản lý chất lượng dịch vụ mạng.
* __Total Length (16 bit):__ Chỉ ra chiều dài của toàn bộ IP Datagram tính theo byte, bao gồm data và phần header. Do có 16 bit nên tối đa là 2^16 = 65536 byte = 64 Kb nên chiều dài tối đa của 1 IP Datagram là 64 Kb.
* __Identification (16 bit):__ Chỉ mã số của  1 IP Datagram , giúp bên nhận có thể ghép các mảnh của 1 IP Datagram lại với nhau vì IP Datagram phân thành các mảnh và  các mảnh thuộc cùng  1 IP  Datagram sẽ có cùng Identification.
* __Flag (3 bit): Bit 0:__ không dùng, Bit 1: cho biết gói có phân mảnh hay không, Bit 2: nếu gói IP Datagram bị phân mảnh thì mảnh này cho biết mảnh này có phải là mảnh cuối không. Bao gồm 6 cờ: URG – cờ cho trường Urgent pointer, ACK – cờ cho trường Acknowledgement, PSH  hàm Push, RST – thiết lập lại đường truyền, SYN – đồng bộ lại số thứ tự, FIN – không gửi thêm dữ liệu.
* __Fragment Offset (13 bit):__ Báo bên nhận vị trí offset của các mảnh so với gói IP datagram gốc  để có thể ghép lại thành IP datagram gốc.
* __Time To Live (TTL) (8 bit):__ Chỉ ra số bước nhảy (hop) mà một gói có thể đi qua. Con số này sẽ giảm đi 1, khi gói tin đi qua 1 router. Khi router nào nhận gói tin thấy  TTL đạt tới 0 gói này sẽ bị loại. Đây là giải pháp nhằm ngăn chặn tình trạng lặp vòng vô hạn của gói tin trên mạng.
* __Protocol (8 bit):__ Chỉ ra giao thức nào của tầng trên (tầng Transport) sẽ nhận phần data sau khi công đoạn xử lí IP diagram ở tầng Network hoàn tất hoặc chỉ ra giao thức nào của tầng trên gởi segment xuống cho tầng Network đóng gói thành IP Diagram, mỗi giao thức có 1 mã (06:  TCP, 17: UDP, 01:  ICMP…).
* __Header CheckSum (16 bit):__ Hỗ trợ cho Router phát hiện lỗi bit trong khi nhận IP datagram. Giúp bảo đảm sự toàn vẹn của IP Header.
* __Source IP Address (32 bit):__ Chỉ ra địa chỉ của thiết bị truyền IP diagram (Xem cấu trúc của địa chỉ IPv4).
* __Destination IP Address (32 bit):__ Chỉ ra địa chỉ IP của thiết bị sẽ nhận IP diagram (Xem cấu trúc của địa chỉ IPv4).
* __IP Option:__ kích thước không cố định, chứa các thông tin tùy chọn như: Time stamp – thời điểm đã đi qua Router, Security – cho phép Router nhận gói dữ liệu không, nếu không thì gói sẽ bị hủy, Record Router – lưu danh sách địa chỉ IP của Router mà gói phải đi qua, Source Route – bắt buộc đi qua Router nào đó. Lúc này sẽ không cần dùng bảng định tuyến ở mỗi Router nữa.
* __Padding:__ Các số 0 được bổ sung vào trường này để đảm bảo IP Header luôn là bội số của 32 bit.