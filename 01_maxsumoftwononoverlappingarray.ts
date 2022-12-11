function maxSumTwoNoOverlap(nums: number[], firstLen: number, secondLen: number): number {
    let nums1: number[] = [...nums];

    let maxSum: number = 0;
    if(firstLen === 1) {
        maxSum = Math.max(...nums);
        nums1.splice(nums.indexOf(maxSum), 1)
    }
    else {
        for(let i = 0; i < firstLen; i++) maxSum += nums[i];

        let temp = maxSum;
        for(let i = firstLen; i < nums.length; i++) {
            temp = temp - nums[i - firstLen] + nums[i];
            if(temp > maxSum) maxSum = temp;
        }
    }

    let maxSum1: number = 0;
    if(secondLen === 1) maxSum1 = Math.max(...nums);
    else {
        for(let i = 0; i < secondLen; i++) maxSum += nums[i];

        let temp1 = maxSum1;
        for(let i = secondLen; i < nums.length; i++) {
            temp1 = temp1 - nums[i - secondLen] + nums[i];
            if(temp1 > maxSum) maxSum1 = temp1;
        }
    }

    return maxSum + maxSum1;
};
