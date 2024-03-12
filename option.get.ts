export default defineEventHandler(async (event) => {
    const authorizationHeader = event.req.headers.authorization;

    if (!authorizationHeader) {
        // 如果授權標頭不存在，可能需要返回錯誤或執行其他適當的操作
        return { error: 'Missing Authorization header' };
    }

    const res = await $fetch('https://www.vscinemas.com.tw/VsWeb/api/GetLstDicCinema', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: authorizationHeader,
        },
    });

    console.log(res);
    return res;
});
