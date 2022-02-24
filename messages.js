const pairTable = [
    '基本配置', 'Basic Configure',
    '并发数目', 'Parallel Tasks',
    '预计流量', 'Target Trafic Amount',
    '数据源', 'Data Source',
    '选择', 'Select Prepared',
    '自定义', 'Add Data Source',
    '统计信息', 'Statistics',
    '启动', 'Fire',
    '停止', 'Stop',
    '自定义数据源', 'Add Data Source',
    '描述', 'Discription',
    '链接', 'Link',
    '块大小', 'Size',
    '确认', 'Cancel',
    '取消', 'Confirm',
    '速度: ', 'Speed: ',
    '流量: ', 'Amount: ',
    '时长: ', 'Time: '
]



const messages = {
    "en": {
        "message": {
        }
    },
    "cn": {
        "message": {
        }
    }
}

for(let i = 0, len = pairTable.length; i < len; i++){
    let row = Math.floor(i / 2) + 2
    if(i % 2 === 0){
        messages.cn.message['s' + row] = pairTable[i]
    }else{
        messages.en.message['s' + row] = pairTable[i]
    }
}