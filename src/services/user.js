import { BaseService } from "../shared";

class UserService extends BaseService {
    getList() {
        return this.get('/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
    }

    create(data, config) {
        return this.create('/api/QuanLyNguoiDung/DangKy', data, config)
    }

    update(data, config) {
        return this.update('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data, config)
    }

    delete(data, config) {
        return this.delete('/api/QuanLyNguoiDung/XoaNguoiDung', data, config)
    }
}

export const userService = new UserService();